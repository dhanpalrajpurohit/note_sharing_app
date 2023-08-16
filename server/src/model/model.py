from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
import jwt

from app.db import Base


class Task(Base):
    __tablename__ = "task"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    note_id = Column(Integer, ForeignKey("note.id"))


class Note(Base):
    __tablename__ = "note"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    user_id = Column(Integer, ForeignKey("user.id"))
    task = relationship(Task, back_populates="note")

    def __repr__(self):
        return f'Note(title={self.title}, description={self.description}, user={self.user})'

class User(Base):
    __tablename__ = "user"    
    id = Column(Integer, primary_key=True, index=True)
    fname = Column(String)
    lname = Column(String)
    email = Column(String)
    password = Column(String)
    note = relationship(Note, back_populates="user")

    def __repr__(self):
        return f'User(fname={self.fname}, lname={self.lname}, email={self.email}, password={self.password})'

    def generate_token(self) -> dict:
        return ({
            "token": jwt.encode(
                {"fname": self.fname, "email": self.email},
                "javainuse-secret-key"
            ),
            "fname": self.fname,
            "lname": self.lname,
            "email": self.email
        })

