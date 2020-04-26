from django.db import models
from django.contrib.auth.models import User
from Projects.models import Project
from django.utils import timezone
import datetime
# Create your models here.


class Club(models.Model):
    club_name = models.CharField(max_length=100)  # Changed n to N
    member = models.ManyToManyField(User, through='Members')
    projects = models.ManyToManyField(Project, blank=True)
    date_Started = models.DateField(blank=True, null=True)
    reg_Link = models.CharField(max_length=200, blank=True)
    club_Link = models.CharField(max_length=200, blank=True)
    description = models.CharField(max_length = 500,blank = True)
    def __str__(self):
        return self.club_name

    def startedNow(self):
        return self.date_Started >= timezone.now() - datetime.timedelta(days=1)


class Members(models.Model):
    member = models.ForeignKey(User, on_delete=models.CASCADE)
    club = models.ForeignKey(Club, on_delete=models.CASCADE)
    member_Type = models.CharField(max_length=20)
    date_Joined = models.DateField(blank=True, null=True)

    def __str__(self):
        p = self.club.club_name + '/' + self.member.username
        return p

#Types of members:-
# 1) admin
# 2) subadmin
# 3) member