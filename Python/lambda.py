people = [
    {"name": "Harry", "house": "Gryffindor"},
    {"name": "Cho", "house": "Ravenclaw"},
    {"name": "Draco", "house": "Slytherin"}
]
#  v1  to sort the dict list
# def f(people):
#     return people["house"]

# people.sort(key = f)


# v2 use lambda
people.sort(key = lambda person: person["name"])
print(people)