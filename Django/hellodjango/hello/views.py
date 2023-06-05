from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
    # return HttpResponse("Hello")
    return render(request, "hello1/index.html")

def george(request):
    return HttpResponse("Hello, George!")

def greet(request, name):
    # return HttpResponse(f"Hello, {name.capitalize()}!")
    return render(request, "hello1/greet.html", {
        "name": name.capitalize()
    })