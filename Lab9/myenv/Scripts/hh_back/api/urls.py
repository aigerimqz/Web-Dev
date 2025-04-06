from api import views
from django.urls import path

urlpatterns = [
    path('companies/', views.companies_list),
    path('companies/<int:company_id>/', views.company_detail),
    path('companies/<int:company_id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.vacancies_list),
    path('vacancies/<int:vacancy_id>', views.vacancy_detail),
    path('vacancies/top_ten/', views.top_ten_vacancies)
    
]
