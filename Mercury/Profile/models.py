from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from rest_framework.authtoken.models import Token
from django.dispatch import receiver
from datetime import datetime


class UserProfile(models.Model):
    """ Model to represent additional information about user """
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        
    )
    bio = models.TextField(
        max_length=2000,
        blank=True,
        default=''
    )
    # we use URL instead of imagefield because we'll use 3rd party img hosting later on
    agen = models.IntegerField()
    
    gender = models.CharField(max_length=16, default='', blank=True)
    name = models.CharField(max_length=32, default='',blank=True)
    number=models.IntegerField(default='',blank=True)
    dob = models.DateField()
    def __str__(self):
        return "/".join([self.user.username, self.name])
    def age(self):
        return int((datetime.now().date() - self.dob).days / 365.25)

# automatically create a token for each new user



