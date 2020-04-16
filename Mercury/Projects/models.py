from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Project(models.Model):
	project_Name = models.CharField(max_length=100)
	working_Users = models.ManyToManyField(User)
	date_Started = models.DateField(null=True,blank=True)
	description = models.CharField(null=True,max_length=500)
	def __str__(self):
		return self.project_Name
	def startedNow(self):
		return self.date_Started >= datetime.date.today() 	
		