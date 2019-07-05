from django.shortcuts import render
from .serializers import TestSerializer
from rest_framework import viewsets
from .models import Test
from .serializers import DonationCenterSerializer
from .models import DonationCenter
from .models import Donation
from .serializers import DonationSerializer
from .serializers import BloodBagSerializer
from .models import BloodBag
from .models import Campaign
from .serializers import CampaignSerializer
from .models import CampaignCenter
from .serializers import CampaignCenterSerializer
# Create your views here.


class TestViewSet(viewsets.ModelViewSet):
    queryset = Test.objects.all()
    serializer_class = TestSerializer


class DonationCenterViewSet(viewsets.ModelViewSet):
    queryset = DonationCenter.objects.all()
    serializer_class = DonationCenterSerializer


class DonationViewSet(viewsets.ModelViewSet):
    queryset = DonationCenter.objects.all()
    serializer_class = DonationCenterSerializer

class BloodBagViewSet(viewsets.ModelViewSet):
    queryset = BloodBag.objects.all()
    serializer_class = BloodBagSerializer

class CampaignViewSet(viewsets.ModelViewSet):
    queryset = Campaign.objects.all()
    serializer_class = CampaignSerializer

class CampaignCenterViewSet(viewsets.ModelViewSet):
    queryset = CampaignCenter.objects.all()
    serializer_class = CampaignCenterSerializer