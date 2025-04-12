from api.views import companies_list, company_detail, company_vacancies, top_ten_vacancies, vacancies_list, vacancy_detail
from django.urls import path
from api.views import CompaniesListAPIView, CompanyDetailAPIView, VacanciesListAPIView, VacancyDetailAPIView, CompanyVacanciesAPIView, TopTenVacanciesAPIView


# Function Based View
# urlpatterns = [
#     path('companies/', companies_list),
#     path('companies/<int:company_id>/', company_detail),
#     path('companies/<int:company_id>/vacancies/', company_vacancies),
#     path('vacancies/', vacancies_list),
#     path('vacancies/<int:vacancy_id>', vacancy_detail),
#     path('vacancies/top_ten/', top_ten_vacancies)
    
# ]

# Class Based View
urlpatterns = [
    path('companies/', CompaniesListAPIView.as_view()),
    path('companies/<int:company_id>/', CompanyDetailAPIView.as_view()),
    path('companies/<int:company_id>/vacancies/', CompanyVacanciesAPIView.as_view()),
    path('vacancies/', VacanciesListAPIView.as_view()),
    path('vacancies/<int:vacancy_id>', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', TopTenVacanciesAPIView.as_view())
    
]
