from rest_framework import serializers
from .models import Test
from .models import DonationCenter
from .models import Donation
from .models import BloodBag
from .models import Campaign
from .models import CampaignCenter

class TestSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Test
        fields = ('var1', 'var2', 'id')

class DonationCenterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DonationCenter
        fields = ('center_name','address','center_mobile','center_telephone','open_time','close_time','updated')

class DonationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Donation
        fields = ('do_first_name','do_last_name','do_last_name','blood_group','age','gender',
        'updated' ,'cnts_id','address','donation_center','created')

class BloodBagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BloodBag
        fields = ('donation','donation_center','validity','enter_date')

class CampaignSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Campaign
        fields = ('campaign_name','start_date','end_date','comments')

class CampaignCenterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CampaignCenter
        fields = ('Campaign' , 'Campaign')