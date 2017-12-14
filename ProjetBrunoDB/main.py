from flask import *
from flask_restful import Resource, Api
from mongoengine import *

connect('valsusa')

app = Flask(__name__)
api = Api(app)

from resources.r_corporation import *
api.add_resource(RCorporation, '/corp/<string:corp_id>')
api.add_resource(RCorporationList, '/corps')

from resources.r_category import *
api.add_resource(RCategory, '/category/<string:cat_id>')
api.add_resource(RCategoryList, '/categories')
api.add_resource(RCategoryRoot, '/category/root')

from resources.r_translation import *
api.add_resource(RTranslation, '/translation/<string:trans_id>')
api.add_resource(RTranslationList, '/translations')

if __name__ == "__main__":
    app.run()
