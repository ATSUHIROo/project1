from flask import Flask
app = Flask(__name__)

import test.main

from test import db
db.create_books_table()