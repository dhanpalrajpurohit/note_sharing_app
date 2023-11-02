from sqlalchemy.orm import Session

from model import model as models
from app import schemas

from app.hashing import Hasher


class UserRepo:
    async def create(db: Session, instance: schemas.UserCreate):
        db_item = models.User(
            full_name=instance.full_name,
            email=instance.email,
            password=Hasher.get_password_hash(instance.password),
        )
        db.add(db_item)
        db.commit()
        db.refresh(db_item)
        return db_item

    @property
    def fetch_by_id(self, db: Session, _id):
        return db.query(models.User).filter(models.User.id == _id).first()

    def fetch_by_email(db: Session, _email) -> models.User:
        return db.query(models.User).filter(models.User.email == _email).first()

    def fetch_by_name(db: Session, _email):
        return db.query(models.User).filter(models.User.email == _email).first()

    @property
    def fetch_all(self, db: Session, skip: int = 0, limit: int = 100):
        return db.query(models.User).offset(skip).limit(limit).all()

    @property
    async def delete(self, db: Session, _email):
        db_item = db.query(models.User).filter_by(email=_email).first()
        db.delete(db_item)
        db.commit()

    @property
    async def update(self, db: Session, item_data):
        updated_item = db.merge(item_data)
        db.commit()
        return updated_item


class NoteRepo:
    async def create(db: Session, instance: schemas.NoteCreate, user: models.User):
        db_item = models.Note(
            title=instance.title, description=instance.description, user=user
        )
        db.add(db_item)
        db.commit()
        db.refresh(db_item)
        return db_item

    def fetch_all(db: Session, skip: int = 0, limit: int = 100):
        return db.query(models.Note).offset(skip).limit(limit).all()
