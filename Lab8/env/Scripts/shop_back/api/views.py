from django.shortcuts import render, get_object_or_404
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
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def product_item(request, id):
    product = get_object_or_404(Product, id=id)
    return JsonResponse(product.to_json())