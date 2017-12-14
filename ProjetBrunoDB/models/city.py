from mongoengine import *


class City(Document):
    from models.internationalization import Translation

    name = ReferenceField(Translation)
    zipcode = StringField(required=True)
    country = ReferenceField('Country')
