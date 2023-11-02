import uvicorn
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from model import model as models
from app import schemas as schemas

from app.db import get_db, engine
from app.repository import UserRepo, NoteRepo
from app.hashing import Hasher


app = FastAPI()

origins = ["*"]

models.Base.metadata.create_all(bind=engine)


@app.post('/user', tags=["user"], response_model=schemas.User, status_code=200)
async def create_user(request_data: schemas.UserCreate, db: Session = Depends(get_db)):
    user = UserRepo.fetch_by_name(db, _email=request_data.email)
    if user:
        raise HTTPException(status_code=400, detail="Item already exists!")
    else:
        user = await UserRepo.create(db=db, instance=request_data)
    return user


@app.delete('/user/{email}', tags=["user"], status_code=204)
async def remove_user(email: str, db: Session = Depends(get_db)):

    user = UserRepo.fetch_by_email(db, _email=email)
    if not user:
        raise HTTPException(status_code=404, detail="Item not found with the given ID")

    await UserRepo.delete(db, user.email)

    return 204


@app.post('/account/login/', response_model=schemas.UserDetail, tags=["user"], status_code=200)
async def user_login(data: schemas.UserLogin, db: Session = Depends(get_db)):
    user = UserRepo.fetch_by_email(db, _email=data.email)
    if user:
        if Hasher.verify_password(data.password, user.password):
            return user.generate_token()
        else:
            return 401
    else:
        return 404


@app.post('/note/', status_code=200)
async def create_note(data: schemas.NoteCreate, db: Session = Depends(get_db)):
    user = UserRepo.fetch_by_email(db, _email=data.user)
    if user:
        note = NoteRepo.create(db=db, instance=data, user=user)
        return note
    else:
        raise HTTPException(status_code=404, detail="User email address not exist!!")


@app.get('/note/', status_code=200)
async def get_note(db: Session = Depends(get_db)):
    notes = NoteRepo.fetch_all(db)
    if notes:
        return notes
    else:
        raise HTTPException(status_code=404, detail="Note not found!!!")

if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)

