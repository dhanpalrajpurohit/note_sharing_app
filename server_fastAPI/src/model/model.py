import jwt

from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from app.db import Base


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    creator_id = Column(Integer, ForeignKey("users.id"))
    creator = relationship("User", back_populates="tasks")
    assign_to = Column(String)
    resolved_by = Column(String)
    status = Column(String)
    priority = Column(String)
    created_at = Column(String)
    updated_at = Column(String)


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String)
    email = Column(String)
    password = Column(String)
    tasks = relationship("Task", back_populates="creator", cascade="all, delete-orphan")


    def __repr__(self):
        return f"User(full_name={self.full_name}, email={self.email}, password={self.password})"

    def generate_token(self) -> dict:
        return {
            "token": jwt.encode(
                {"full_name": self.full_name, "email": self.email}, "javainuse-secret-key"
            ),
            "full_name": self.full_name,
            "email": self.email,
        }
