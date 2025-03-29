import json
from django.core.management.base import BaseCommand
from django.core.exceptions import ObjectDoesNotExist
from api.models import Product, Category

class Command(BaseCommand):
    help = "Import external JSON file into Django database"

    def handle(self, *args, **kwargs):
        with open(r'D:\WebDev\Lab8\env\Scripts\shop_back\products.json', 'r', encoding='utf8') as file:
            data = json.load(file)
           
            # print(data)
            for item in data:
                try:
                    category = Category.objects.get(id=item["category_id"])
                except ObjectDoesNotExist:
                    self.stdout.write(self.style.ERROR(f"Category {item['category_id']} not found"))
                    continue
                
                Product.objects.update_or_create(
                
                    name=item["name"],
                    defaults={
                        "price": item["price"],
                        "description": item["description"],
                        "count": item["count"],
                        "is_active": item["is_active"],
                        "category": category,
                    }
                )
        self.stdout.write(self.style.SUCCESS("Done"))
