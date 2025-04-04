# from django.shortcuts import render
# from django.http import HttpResponse, HttpRequest, JsonResponse
# from api.models import Company, Vacancy

# # Create your views here.
# def companies_list(request):
#     companies = Company.objects.all()
#     compnaies_json = [c.to_json() for c in companies]
#     return JsonResponse(compnaies_json, safe=False)

# def companies_show(request, company_id = None):
#     try:
#         company = Company.objects.get(pk = company_id)
#     except Company.DoesNotExist as e:
#         return JsonResponse({'error': str(e)}, status = 404)

#     return JsonResponse(company.to_json(), status = 200)
