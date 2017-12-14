from mongoengine import *


class Category(Document):
    from models.internationalization import Translation
    name = ReferenceField(Translation)
    image = ImageField()
    subcat = ListField(ReferenceField('Category'))
    corps = ListField(ReferenceField('Corporation'))
    is_root = BooleanField()
