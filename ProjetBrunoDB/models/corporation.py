from mongoengine import *


class Corporation(Document):
    from models.internationalization import Translation
    from models.pack import Pack
    from models.account import Account
    from models.address import Address

    name = StringField(required=True)
    account = ReferenceField(Account)
    address = ReferenceField(Address)
    phone = StringField(required=True)
    website = StringField()
    mail = EmailField()
    description = ReferenceField(Translation)

    latitude = FloatField()
    longitude = FloatField()

    views = IntField()
    pack = ReferenceField(Pack)
    coin = IntField()
