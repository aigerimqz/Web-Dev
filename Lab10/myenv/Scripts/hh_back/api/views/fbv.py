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
        return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
    if request.method == "GET":
        serializer = CompanySerializer(company)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "PUT":
       
        serializer = CompanySerializer(instance = company, data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        company.delete()
        return Response({'message': 'Company deleted'})



@api_view(['GET', 'POST'])
def vacancies_list(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
      
        serializer = VacancySerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST', 'DELETE'])
def vacancy_detail(request, vacancy_id = None):
    try:
        vacancy = Vacancy.objects.get(pk = vacancy_id)
    except Vacancy.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
    if request.method == "GET":
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "PUT":
 
        serializer = VacancySerializer(instance = vacancy, data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_NOT_FOUND)
    elif request.method == "DELETE":
        vacancy.delete()
        return Response({'message': 'Vacancy deleted'})


@api_view(['GET'])
def company_vacancies(request, company_id = None):
    if request.method == "GET":
        try: 
            company = Company.objects.get(pk = company_id)
        except Company.DoesNotExist:
            return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)

        vacancies = company.vacancies.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def top_ten_vacancies(request):
    if request.method == "GET":
        top_vacancies = Vacancy.objects.order_by('-salary')[:10]
        
        serializer = VacancySerializer(top_vacancies, many = True)
        return Response(serializer.data)