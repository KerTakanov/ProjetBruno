from flask_restful import Resource
from models.category import Category


class RCategory(Resource):
    def get(self, cat_id):
        cat = Category.objects(id=cat_id)[0]
        return cat.to_json()


class RCategoryList(Resource):
    def get(self):
        cats = Category.objects()
        return cats.to_json()


class RCategoryRoot(Resource):
    def get(self):
        root = Category.objects(is_root=True)
        return root[0].to_json()
