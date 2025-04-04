from django.shortcuts import render
from django.http import HttpResponse, HttpRequest, JsonResponse
from api.models import Company, Vacancy

# Create your views here.
def companies_list(request):
    companies = Company.objects.all()
    