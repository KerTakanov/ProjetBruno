from flask_restful import Resource

from models.address import Address
from models.corporation import Corporation


class RCorporation(Resource):
    def get(self, corp_id):
        import json
        corp = Corporation.objects(id=corp_id)[0]
        address = Address.objects(id=corp.address.id)[0]

        d_corp = {
          "_id": corp_id,
          'name': corp.name,
          'account': corp.account.to_json(),
          'address': address.to_json(),
          'phone': corp.phone,
          'mail': corp.mail,
          'description': corp.description.to_json(),
          'latitude': corp.latitude,
          'longitude': corp.longitude,
          'views': corp.views,
          'pack': corp.pack.to_json(),
          'coin': corp.coin
        }

        print(d_corp)

        return json.dumps(d_corp)


class RCorporationList(Resource):
    def get(self):
        corplist = Corporation.objects()
        return corplist.to_json()
