from mongoengine import *


class Country(Document):
    from models.internationalization import Translation
    name = ReferenceField(Translation)
