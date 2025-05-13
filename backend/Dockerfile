FROM python:3.10

WORKDIR /app

# Install PostgreSQL client libraries needed for psycopg2
RUN apt-get update && apt-get install -y \
    postgresql-client \
    libpq-dev \
    gcc \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Make sure the database is ready before starting the app
CMD ["python", "run.py"]
