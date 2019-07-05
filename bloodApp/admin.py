from django.contrib import admin
from .models import Test
from .models import DonationCenter
from .models import Donation
from .models import BloodBag
from .models import Campaign
from .models import CampaignCenter

# Register your models here.
admin.site.register(Test)
admin.site.register(DonationCenter)
admin.site.register(Donation)
admin.site.register(BloodBag)
admin.site.register(Campaign)
admin.site.register(CampaignCenter)