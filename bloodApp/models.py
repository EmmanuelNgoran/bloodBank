from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Test(models.Model):
    var1 = models.CharField(max_length=2000)
    var2 = models.DateTimeField('date post')

    def __str__(self):
        return self.var1

    def __unicode__(self):
        return


class Donation_center(models.Model):
    center_name = models.CharField(max_length=30)
    address = models.CharField(max_length=50)
    center_mobile = models.CharField(max_length=20)
    center_telephone = models.CharField(max_length=20)
    open_time = models.TimeField()
    close_time = models.TimeField()
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{}".format(self.center_name)

    def __unicode__(self):
        return


class Donation(models.Model):
    BLOOD_TYPE = (
        ('O+', 'O positif'),
        ('O-', 'O negatif'),
        ('A+', 'A positif'),
        ('A-', 'A negatif'),
        ('B+', 'B positif'),
        ('B-', 'B negatif'),
        ('AB+', 'AB positif'),
        ('AB-', 'AB negatif'),
    )
    GENDER = (('H', 'Homme'),
              ('F', 'Femme'),
              ('Autre', 'Autre'))
    do_first_name = models.CharField(max_length=30)
    do_last_name = models.CharField(max_length=60)
    blood_group = models.CharField(max_length=2, choices=BLOOD_TYPE)
    age = models.PositiveSmallIntegerField()
    gender = models.CharField(max_length=6, choices=GENDER)
    cnts_id = models.CharField(max_length=10)
    address = models.CharField(max_length=50)
    donation_center = models.ForeignKey(
        Donation_center, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return "{}-{}".format(self.do_first_name, self.do_last_name)

    def __unicode__(self):
        return


class Blood_bag(models.Model):
    donation = models.ForeignKey(Donation, on_delete=models.CASCADE)
    donation_center = models.ForeignKey(
        Donation_center, on_delete=models.CASCADE)
    validity = models.DateField()
    enter_date = models.DateField()

    def __str__(self):
        return "{}".format(self.donation.blood_group)

    def __unicode__(self):
        return


class Campaign(models.Model):
    campaign_name = models.CharField(max_length=50)
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField()
    comments = models.TextField(max_length=5000)

    def __str__(self):
        return self.campaign_name

    def __unicode__(self):
        return


class Campaign_center(models.Model):
    Campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    Campaign = models.ForeignKey(Donation_center, on_delete=models.CASCADE)
