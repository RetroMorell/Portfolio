from flask import Flask, render_template


def create_app() -> Flask:
    app = Flask(__name__)

    @app.route("/")
    def home():
        return render_template("index.html")

    @app.route("/projects")
    def projects():
        return render_template("projects.html")

    @app.route("/about")
    def about():
        return render_template("about.html")

    @app.route("/contact")
    def contact():
        return render_template("contact.html")

    @app.route("/resume")
    def resume():
        return render_template("resume.html")

    return app


if __name__ == "__main__":
    application = create_app()
    application.run(host="0.0.0.0", port=5001, debug=True)

