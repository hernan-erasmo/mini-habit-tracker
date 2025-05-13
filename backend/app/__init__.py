from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dotenv import load_dotenv
import os
from app.config import Config

# Load environment variables from .env file
load_dotenv()

db = SQLAlchemy()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize extensions
    db.init_app(app)
    CORS(app)

    # Import and register blueprints
    from app.routes.habits import habits_bp
    app.register_blueprint(habits_bp)

    # Create database tables
    with app.app_context():
        db.create_all()

    return app
