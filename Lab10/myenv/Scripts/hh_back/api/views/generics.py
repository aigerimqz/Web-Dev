from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics, mixins
from rest_framework.exceptions import NotFound



from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer



class CompaniesListAPIView(generics.ListCreateAPIView):
    
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanyDetailAPIView(generics.RetrieveUpdateDestroyAPIView):

    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_url_kwarg = 'company_id'

   
# # Create your views here.



class VacanciesListAPIView(generics.ListCreateAPIView):
    
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

   

class VacancyDetailAPIView(generics.RetrieveUpdateDestroyAPIView):

    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_url_kwarg = 'vacancy_id'

   





class CompanyVacanciesAPIView(mixins.ListModelMixin,
                              generics.GenericAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs.get('company_id')
        try:
            company = Company.objects.get(pk=company_id)
        except Company.DoesNotExist:
            raise NotFound(detail="Company not found")
        return company.vacancies.all()

    def get(self, request, *args, **kwargs):
        return self.list(request, args, kwargs)


class TopTenVacanciesAPIView(mixins.ListModelMixin,
                             generics.GenericAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]

    def get(self, request, *args, **kwargs):
        return self.list(request, args, kwargs)


