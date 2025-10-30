# Flask Docker App

A simple Python Flask web application designed for Docker containerization learning.

## Features

- Clean, aesthetic UI with gradient design
- Two routes: Home (`/`) and About (`/about`)
- Docker-ready configuration

## Local Development

```bash
# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the app
python app.py
```

Visit `http://localhost:5000`

## Docker Usage

Create your own Dockerfile and containerize this Flask application for hands-on Docker learning.

## Project Structure

```
python-app/
├── app.py              # Main Flask application
├── requirements.txt    # Python dependencies
├── templates/          # HTML templates
│   ├── index.html     # Home page
│   └── about.html     # About page
└── README.md          # This file
```
