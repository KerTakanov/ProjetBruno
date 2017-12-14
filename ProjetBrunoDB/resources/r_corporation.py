from flask_restful import Resource
from models.corporation import Corporation


class RCorporation(Resource):
    def get(self, corp_id):
        corp = Corporation.objects(id=corp_id)[0]
        return corp.to_json()


class RCorporationList(Resource):
    def get(self):
        corplist = Corporation.objects()
        return corplist.to_json()
