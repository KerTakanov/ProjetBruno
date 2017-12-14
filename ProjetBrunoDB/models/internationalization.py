from mongoengine import *


class Translation(Document):
    key = StringField(required=True, unique=True)
    names = DictField()
