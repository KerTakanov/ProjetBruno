from mongoengine import *


class Event(Document):
    from models.internationalization import Translation
    name = ReferenceField(Translation, required=True)
    desc = ReferenceField(Translation, required=True)
    date = DateTimeField(required=True)
