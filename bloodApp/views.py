from django.shortcuts import render
from .serializers import  TestSerializer
from rest_framework import viewsets
from .models import Test
from .serializers import DonationCenterSerializer
from .models import Donation_center
from .models import Donation
from .serializers import DonationSerializer
# Create your views here.

class TestViewSet(viewsets.ModelViewSet):
    queryset = Test.objects.all()
    serializer_class = TestSerializer

class DonationCenterViewSet(viewsets.ModelViewSet):
    queryset = Donation_center.objects.all()
    serializer_class = DonationCenterSerializer

class DonationViewSet(viewsets.ModelViewSet):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer



