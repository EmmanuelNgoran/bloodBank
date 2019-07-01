from django.shortcuts import render
from .serializers import  TestSerializer
from rest_framework import viewsets
from .models import Test
# Create your views here.

class TestViewSet(viewsets.ModelViewSet):
    queryset = Test.objects.all()
    serializer_class = TestSerializer


