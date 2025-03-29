from django.shortcuts import render
from api.models import Product
from django.http import HttpRequest, HttpResponse, JsonResponse

# Create your views here.
def test_json(request):
    data = {
        "name": "Aigerim",
        "lastname": "Manat",
        "gpa": 3.9
    }
    return JsonResponse(data)

def products_list(request):
    products = Product.objects.all()
    