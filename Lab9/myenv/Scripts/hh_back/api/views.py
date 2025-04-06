from django.shortcuts import render
from django.http import HttpResponse, HttpRequest, JsonResponse
from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt
import json
from api.serializers import CompanySerializer, VacancySerializer


# # Create your views here.
@csrf_exempt
def companies_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = CompanySerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def company_detail(request, company_id = None):
    try:
        company = Company.objects.get(pk = company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)
    if request.method == "GET":
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data, status=200)
    elif request.method == "PUT":
        new_data = json.loads(request.body)
        serializer = CompanySerializer(instance = company, data = new_data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = 201)
        return JsonResponse(serializer.errors, status = 400)
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({'message': 'Company deleted'})
# def companies_show(request, company_id = None):
#     try:
#         company = Company.objects.get(pk = company_id)
#     except Company.DoesNotExist as e:
#         return JsonResponse({'error': str(e)}, status = 404)

#     return JsonResponse(company.to_json(), status = 200)
