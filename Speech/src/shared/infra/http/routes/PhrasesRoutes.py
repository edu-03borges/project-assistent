import requests
import json
import os

jsonDir = os.path.abspath(os.getcwd())

with open("{}\\src\\config\\parameters.json".format(jsonDir), encoding='utf-8') as my_json:
    data = json.load(my_json)

def pharaseRouter(question):
    body = dict(question=question)

    request = requests.get(data["API"]["host"], data=body)

    return request.json()