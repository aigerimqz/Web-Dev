from api import views
from django.urls import path

urlpatterns = [
    path('companies/', views.companies_list),
    path('companies/<int:company_id>/', views.company_detail)
    
]
