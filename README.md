# Flask Portfolio

A simple, generic portfolio scaffold built with Flask, Bootstrap, and minimal CSS/JS.

## Prerequisites
- Python 3.10+

## Setup
```bash
python3 -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## Run
```bash
python app.py
```

Visit http://localhost:5000 in your browser.

## Customize
- Update templates in `templates/`
- Add styles to `static/css/styles.css`
- Add scripts to `static/js/main.js`
- Replace placeholder images or use your own in `static/img/`

## Theme (Light/Dark)
- Use the navbar "Theme" menu to choose Light, Dark, or Auto.
- Your choice persists in localStorage. "Auto" follows the system preference.

## Resume PDF
- Place your PDF at `static/resume/resume.pdf`.
- Visit the "Resume" link in the navbar or open directly: `/static/resume/resume.pdf`.

