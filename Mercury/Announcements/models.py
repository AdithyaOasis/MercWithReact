from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Announcement(models.Model):
	group = models.CharField(max_length=200)
	date_time = models.DateTimeField()
	user_from  = models.ForeignKey(User, on_delete=models.CASCADE)
	content = models.TextField()

	def __str__(self):
		return "/".join([self.user_from.username,self.group,self.content])
