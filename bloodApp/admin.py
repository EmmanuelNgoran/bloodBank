from django.contrib import admin
from .models import Test
from .models import Donation_center
from .models import Donation


# Register your models here.
admin.site.register(Test)

admin.site.register(Donation_center)

admin.site.register(Donation)


