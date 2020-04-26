from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Drive(models.Model):
	link_type = models.CharField(max_length=100)
	link = models.URLField(max_length=300)
	link_name = models.CharField(max_length=100)
	date_created = models.DateTimeField()
	created_by = models.ForeignKey(User, on_delete=models.CASCADE)
	group = models.CharField(max_length=200)

	def __str__(self):
		return "/".join([self.created_by.username,self.group,self.link_name])
