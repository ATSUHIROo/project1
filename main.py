from test import app
from flask import render_template, request, redirect, url_for
import sqlite3
DATABASE = 'database.db'

@app.route('/')
def index():
    con = sqlite3.connect(DATABASE)
    db_books = con.execute('SELECT * FROM books').fetchall()
    con.close()

    books = []

    for row in db_books:
        books.append({'orderer':row[0], 'deadline':row[1], 'orderContent':row[2]})
     
    return render_template(
        'index.html',
        books=books
    )


@app.route('/register', methods=['POST'])
def register():
    
    orderer = request.form['orderer']
    deadline = request.form['deadline']
    orderContent = request.form['orderContent']
    
    con = sqlite3.connect(DATABASE)
    con.execute('INSERT INTO books VALUES(?, ?, ?)',
                [orderer, deadline, orderContent])

    con.commit()
    con.close()   
    return redirect(url_for('index'))