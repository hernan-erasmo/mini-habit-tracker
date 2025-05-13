from flask import Blueprint, request, jsonify
from app.models import Habit
from app.services.habit_service import HabitService
from app import db

habits_bp = Blueprint('habits', __name__)
habit_service = HabitService(db)

@habits_bp.route('/habits', methods=['POST'])
def create_habit():
    data = request.json
    habit = habit_service.create_habit(data['name'])
    return jsonify(habit), 201

@habits_bp.route('/habits', methods=['GET'])
def get_habits():
    habits = habit_service.get_all_habits()
    return jsonify(habits), 200

@habits_bp.route('/habits/<int:id>', methods=['GET'])
def get_habit(id):
    habit = habit_service.get_habit(id)
    if habit:
        return jsonify(habit), 200
    return jsonify({'message': 'Habit not found'}), 404

@habits_bp.route('/habits/<int:id>', methods=['PUT'])
def update_habit(id):
    data = request.json
    habit = habit_service.update_habit(id, data['name'])
    if habit:
        return jsonify(habit), 200
    return jsonify({'message': 'Habit not found'}), 404

@habits_bp.route('/habits/<int:id>', methods=['DELETE'])
def delete_habit(id):
    success = habit_service.delete_habit(id)
    if success:
        return jsonify({'message': 'Habit deleted'}), 204
    return jsonify({'message': 'Habit not found'}), 404

@habits_bp.route('/habits/<int:id>/check-in', methods=['POST'])
def check_in_habit(id):
    success = habit_service.check_in_habit(id)
    if success:
        return jsonify({'message': 'Check-in recorded'}), 200
    return jsonify({'message': 'Habit not found'}), 404
