from django.db import models
import datetime
from django.contrib.auth.models import User
# Create your models here.


class Project(models.Model):
    project_Name = models.CharField(max_length=100)
    date_Started = models.DateField(null=True, blank=True)
    description = models.CharField(blank=True, max_length=500)
    member = models.ManyToManyField(User, through='ProjectMembers')

    def __str__(self):
        return self.project_Name

    def startedNow(self):
        return self.date_Started >= datetime.date.today()

#class ProjectsMembers(models.Model)
class ProjectMembers(models.Model):
    member = models.ForeignKey(User, on_delete=models.CASCADE,blank = True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, blank = True)
    member_Type = models.CharField(max_length=20)
    date_Joined = models.DateField(blank=True, null=True)

    def __str__(self):
        p = self.project.project_Name + '/' + self.member.username
        return p

#Types of members:-
# 1) supervisor
# 2) member