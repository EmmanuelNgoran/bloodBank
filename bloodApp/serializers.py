from rest_framework import serializers
from .models import Test
from .models import Donation_center
from .models import Donation

class TestSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Test
        fields = ('var1','var2','id')

class DonationCenterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Donation_center
        fields =  ('center_name' , 'address' , 'center_mobile' , 'center_telephone' , 'open_time' , 'close_time' , 'updated')

class DonationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Donation
        fields = ('do_first_name','do_last_name','blood_group','age','gender','cnts_id','address','donation_center','created')



