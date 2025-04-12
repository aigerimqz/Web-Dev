from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics, mixins
from rest_framework.exceptions import NotFound



from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer



class CompaniesListAPIView(mixins.CreateModelMixin,
                           mixins.ListModelMixin,
                           generics.GenericAPIView):
    
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, args, kwargs)
    def post(self, request, *args, **kwargs):
        return self.create(request, args, kwargs)

class CompanyDetailAPIView(mixins.RetrieveModelMixin,
                           mixins.UpdateModelMixin,
                           mixins.DestroyModelMixin,
                           generics.GenericAPIView):

    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_url_kwarg = 'company_id'

    def get(self, request, company_id):
        return self.retrieve(request, company_id)
    
    def put(self, request, company_id):
        return self.update(request, company_id)
    
    def delete(self, request, company_id):
        return self.destroy(request, company_id)
# # Create your views here.



class VacanciesListAPIView(mixins.CreateModelMixin,
                           mixins.ListModelMixin,
                           generics.GenericAPIView):
    
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, args, kwargs)
    def post(self, request, *args, **kwargs):
        return self.create(request, args, kwargs)

class VacancyDetailAPIView(mixins.RetrieveModelMixin,
                           mixins.UpdateModelMixin,
                           mixins.DestroyModelMixin,
                           generics.GenericAPIView):

    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_url_kwarg = 'vacancy_id'

    def get(self, request, vacancy_id):
        return self.retrieve(request, vacancy_id)
    
    def put(self, request, vacancy_id):
        return self.update(request, vacancy_id)
    
    def delete(self, request, vacancy_id):
        return self.destroy(request, vacancy_id)





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


