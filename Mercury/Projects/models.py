from django.db import models
import datetime
#from django.contrib.auth.models import User
# Create your models here.


class Project(models.Model):
    project_Name = models.CharField(max_length=100)
    date_Started = models.DateField(null=True, blank=True)
    #description = models.CharField(blank=True, max_length=500)

    #working_Users = models.ManyToManyField(User)

    def __str__(self):
        return self.project_Name

    # def startedNow(self):
     #   return self.date_Started >= datetime.date.today()
