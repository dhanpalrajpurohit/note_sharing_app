from typing import List, Optional

from pydantic import BaseModel

class UserBase(BaseModel):
    fname: str
    lname : str # Optional[str] = None
    email: str
    password: str


class UserCreate(UserBase):
    pass


class User(UserBase):
    email: str

    class Config:
        orm_mode = True


class UserByEmail(BaseModel):
    email: str

    class Config:
        orm_mode = True 


class UserLogin(BaseModel):
    email: str
    password: str
    
    class Config:
        orm_mode = True


class UserDetail(BaseModel):
    email: str
    fname: str
    lname: str
    token: str

    class Config:
        orm_mode = True


class NoteCreate(BaseModel):
    title: str
    description: str
    user: str

    class Config:
        orm_mode = True
