from mongoengine import *


class TimeSpan(EmbeddedDocument):
    open_time = DateTimeField(required=True)
    close_time = DateTimeField(required=True)


class Hours(Document):
    openings = DictField()
    closings = DictField()
    holidays = ListField(TimeSpan)
