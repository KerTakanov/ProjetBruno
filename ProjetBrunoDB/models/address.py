from mongoengine import *


class Address(Document):
    from models.city import City

    city = ReferenceField(City)
    address = StringField(required=True)  # ex "8 Avenue de Marlioz"
