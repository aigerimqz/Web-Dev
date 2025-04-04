from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default='')
    city = models.CharField(max_length=100),
    address = models.TextField()
    new = models.CharField()

class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="company")