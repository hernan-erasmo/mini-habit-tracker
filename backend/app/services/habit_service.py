from datetime import datetime
from app.models import Habit, CheckIn

class HabitService:
    def __init__(self, db):
        self.db = db

    def create_habit(self, name, description=None):
        habit = Habit(name=name, description=description)
        self.db.session.add(habit)
        self.db.session.commit()
        return habit.to_dict()

    def get_all_habits(self):
        habits = Habit.query.all()
        return [habit.to_dict() for habit in habits]

    def get_habit(self, habit_id):
        habit = Habit.query.get(habit_id)
        return habit.to_dict() if habit else None

    def update_habit(self, habit_id, name, description=None):
        habit = Habit.query.get(habit_id)
        if habit:
            habit.name = name
            if description is not None:
                habit.description = description
            habit.updated_at = datetime.utcnow()
            self.db.session.commit()
            return habit.to_dict()
        return None

    def delete_habit(self, habit_id):
        habit = Habit.query.get(habit_id)
        if habit:
            self.db.session.delete(habit)
            self.db.session.commit()
            return True
        return False

    def check_in_habit(self, habit_id):
        habit = Habit.query.get(habit_id)
        if habit:
            check_in = CheckIn(habit_id=habit_id)
            self.db.session.add(check_in)
            self.db.session.commit()
            return True
        return False
