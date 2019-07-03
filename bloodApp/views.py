from django.shortcuts import render
from .serializers import  TestSerializer
from rest_framework import viewsets
from .models import Test
from .serializers import DonationCenterSerializer
from .models import Donation_center
# Create your views here.

class TestViewSet(viewsets.ModelViewSet):
    queryset = Test.objects.all()
    serializer_class = TestSerializer

class DonationCenterViewSet(viewsets.ModelViewSet):
    queryset = Donation_center.objects.all()
    serializer_class = DonationCenterSerializer



