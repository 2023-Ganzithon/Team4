from django.contrib import admin

# Register your models here.
from .models import Grocery, GroceryComment, Delivery,DeliveryComment, RecentSearch

admin.site.register(Grocery)
admin.site.register(GroceryComment)
admin.site.register(Delivery)
admin.site.register(DeliveryComment)
admin.site.register(RecentSearch)