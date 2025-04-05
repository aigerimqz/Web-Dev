from django.urls import path
from api import views
urlpatterns = [
    path('companies/', views.companies_list),
    path('companies/<int:compnay_id>/', views.companies_show)
    
]
