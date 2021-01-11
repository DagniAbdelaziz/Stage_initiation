from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
import datetime


app=Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///store.db'
db=SQLAlchemy(app)

class Message(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    nom=db.Column(db.String(20),nullable=False)
    mdate=db.Column(db.DateTime,default=datetime.datetime.utcnow,nullable=False)
    message=db.Column(db.Text,nullable=False)
    email=db.Column(db.String(20),nullable=False)

class Message_live(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    nom=db.Column(db.String(20),nullable=False)
    mdate=db.Column(db.DateTime,default=datetime.datetime.utcnow,nullable=False)
    message=db.Column(db.Text,nullable=False)


messages=[]
messages_live=[]


@app.route("/")
def home():
    x=datetime.datetime.now().date()
    return render_template("home.html",today=x, titre="Home")

@app.route("/mond")
def mond():
    x=datetime.datetime.now().date()
    return  render_template("mond.html",today=x,titre="Mond")

@app.route("/live",methods=["GET","POST"])
def live():
    valid=False
    if request.method=="POST":
        nom="admin"
        message=request.form.get("message")
        mdate=request.form.get("mdate")
        msg=Message_live(nom=nom,message=message,mdate=mdate)
        db.session.add(msg)
        db.session.commit()
        valid=True
    messages_live=Message_live.query.all()
    messages_live.reverse()
    x=datetime.datetime.now().date()
    return  render_template("live.html",today=x,titre="Data_Live",valid=valid,messages=messages_live)

@app.route("/Statistique")
def Statistique():
    x=datetime.datetime.now().date();
    return  render_template("Statistique.html",today=x,titre="Statistique")


@app.route("/contact",methods=['GET','POST'])
def contact():
    valid=False
    if request.method=="POST":
        nom=request.form.get("nom")
        email=request.form.get("email")
        message=request.form.get("message")
        mdate=request.form.get("mdate")
        msg=Message(nom=nom, email=email,message=message,mdate=mdate)
        db.session.add(msg)
        db.session.commit()
        valid=True
    messages=Message.query.all()
    messages.reverse()
    return  render_template("contact.html",valid=valid,messages=messages)

if __name__=="__main__":
    app.run(debug=True)