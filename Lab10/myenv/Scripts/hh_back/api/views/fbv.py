import json
from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status



from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


# # Create your views here.
@api_view(http_method_names=['GET', 'POST'])
def companies_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = CompanySerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST', 'DELETE'])
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



@csrf_exempt
def vacancies_list(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = VacancySerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def vacancy_detail(request, vacancy_id = None):
    try:
        vacancy = Vacancy.objects.get(pk = vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)
    if request.method == "GET":
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data, status=200)
    elif request.method == "PUT":
        new_data = json.loads(request.body)
        serializer = VacancySerializer(instance = vacancy, data = new_data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = 201)
        return JsonResponse(serializer.errors, status = 400)
    elif request.method == "DELETE":
        vacancy.delete()
        return JsonResponse({'message': 'Vacancy deleted'})



def company_vacancies(request, company_id = None):
    if request.method == "GET":
        try: 
            company = Company.objects.get(pk = company_id)
        except Company.DoesNotExist:
            return JsonResponse({'error': 'Company not found'}, status=404)

        vacancies = company.vacancies.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)

def top_ten_vacancies(request):
    top_vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(top_vacancies, many = True)
    return JsonResponse(serializer.data, safe=False)