from models.category import Category
from models.internationalization import Translation

from mongoengine import *

connect('valsusa')

fr = Category()
#
savoie = Category()
calvados = Category()
idf = Category()
#
restausav = Category()
coiffsav = Category()
restaucal = Category()
lavcal = Category()
restauidf = Category()
superidf = Category()
#############
uk = Category()
#
eng = Category()
scot = Category()
ireland = Category()
#############
ita = Category()
#
milan = Category()
turin = Category()
roma = Category()
#############

###
country_name = None
try:
    country_name = Translation.objects(key="france")[0]
except Exception as e:
    country_name = Translation(key="france", names={"fr-FR": "France"})
    country_name.save()

fr.name = country_name
savoie.name = Translation(key="savoie", names={"fr-FR": "Savoie"})
calvados.name = Translation(key="calvados", names={"fr-FR": "Calvados"})
idf.name = Translation(key="ile-de-france", names={"fr-FR": "Ile-de-France"})

restaut = Translation(key="restaurants", names={"fr-FR": "Restaurants"})
restausav.name = restaut

from models.corporation import Corporation
bestcorp = Corporation.objects(name="Best Company Ever")[0]
restausav.corps = [bestcorp]

coiffsav.name = Translation(key="coiffeur", names={"fr-FR": "Coiffeurs"})
restaucal.name = restaut
lavcal.name = Translation(key="laverie", names={"fr-FR": "Laveries"})
restauidf.name = restaut
superidf.name = Translation(key="supermarket", names={"fr-FR": "Supermarchés"})

uk.name = Translation(key="united-kingdom", names={"fr-FR": "Royaumes-Unis"})
eng.name = Translation(key="eng", names={"fr-FR": "Angleterre"})
scot.name = Translation(key="scot", names={"fr-FR": "Ecosse"})
ireland.name = Translation(key="ireland", names={"fr-FR": "Irlande"})

ita.name = Translation(key="italia", names={"fr-FR": "Italie"})
milan.name = Translation(key="milan", names={"fr-FR": "Milan"})
turin.name = Translation(key="turin", names={"fr-FR": "Turin"})
roma.name = Translation(key="roma", names={"fr-FR": "Rome"})
###
fr.subcat = [savoie, calvados, idf]
savoie.subcat = [restausav, coiffsav]
calvados.subcat = [restaucal, lavcal]
idf.subcat = [restauidf, superidf]

uk.subcat = [eng, scot, ireland]

ita.subcat = [milan, turin, roma]

root = Category()
root.subcat = [fr, uk, ita]

for c in savoie.subcat + calvados.subcat + idf.subcat:
    if c.name not in Translation.objects:
        c.name.save()
    c.save()

for c in fr.subcat + uk.subcat + ita.subcat:
    if c.name not in Translation.objects:
        c.name.save()
    c.save()

for c in [fr, uk, ita]:
    if c.name not in Translation.objects:
        c.name.save()
    c.save()

root.is_root = True
root.save()
