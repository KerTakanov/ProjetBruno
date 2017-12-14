from mongoengine import *


class Pack(Document):
    pack_type = StringField(required=True)
