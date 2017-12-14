from flask_restful import Resource
from models.internationalization import Translation


class RTranslation(Resource):
    def get(self, trans_id):
        trans = Translation.objects(id=trans_id)[0]
        return trans.to_json()


class RTranslationList(Resource):
    def get(self):
        translist = Translation.objects()
        return translist.to_json()
