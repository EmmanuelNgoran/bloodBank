# Generated by Django 2.2.2 on 2019-07-03 10:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bloodApp', '0002_blood_bag_campaign_campaign_center_donation_donation_center'),
    ]

    operations = [
        migrations.RenameField(
            model_name='donation_center',
            old_name='update_to_date',
            new_name='updated',
        ),
    ]
