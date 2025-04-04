from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default='')
    city = models.CharField(max_length=100)
    address = models.TextField(default='')
    new = models.CharField(max_length=100)

class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default='')
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="company")


# def __str__(self):
#     return self.name

# def to_json(self):
#     return{
#         "id": self.id,
#         "name": self.name,
#         "description": self.description,
#         "city": self.city,
#         "address": self.address,

#     }