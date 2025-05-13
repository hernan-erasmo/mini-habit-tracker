from flask import Blueprint

bp = Blueprint('routes', __name__)

from .habits import *  # Import all routes from habits.py