from models.corporation import Corporation
from models.account import Account
from models.internationalization import Translation
from models.country import Country
from models.city import City
from models.address import Address
from models.pack import Pack

from mongoengine import *

connect('valsusa')

account = Account(username="A Random Username", password="A Random Password")

country_name = None
try:
    country_name = Translation.objects(key="france")[0]
except Exception as e:
    country_name = Translation(key="france", names={"fr-FR": "France"})
    country_name.save()

city_name = Translation()
city_name.names["fr-FR"] = "Londres"
city_name.key = "london"

country = Country()
country.name = country_name

city = City()
city.name = city_name
city.zipcode = "42154"
city.country = country

address = Address()
address.city = city
address.address = "321 General Leclerc avenue"

desc = Translation()
desc.names["fr-FR"] = "Meilleure entreprise ever"
desc.key = "desc_best_corp"

pack = Pack(pack_type="Exclusive")

corp = Corporation()
corp.name = "Restaurant le 59"
corp.account = account
corp.address = address
corp.phone = "+885142536"
corp.mail = "hello.worl@gmail.com"
corp.description = desc
corp.latitude = 45.690095
corp.longitude = 5.913445
corp.views = 124945
corp.pack = pack
corp.coin = 250

account.save()
country.save()
city_name.save()
city.save()
address.save()
desc.save()
pack.save()
corp.save()
