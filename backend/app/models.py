from sqlalchemy import Column, Integer, String, Date, ForeignKey
from sqlalchemy.orm import relationship
from datetime import date
from . import db

class Habit(db.Model):
    __tablename__ = 'habits'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    check_ins = relationship("CheckIn", back_populates="habit")

class CheckIn(db.Model):
    __tablename__ = 'check_ins'

    id = Column(Integer, primary_key=True)
    habit_id = Column(Integer, ForeignKey('habits.id'), nullable=False)
    date = Column(Date, default=date.today, nullable=False)

    habit = relationship("Habit", back_populates="check_ins")