from django.db import models
from django.utils import timezone
import datetime
# Create your models here.

class Event(models.Model):
	name = models.CharField(max_length=200)
	date_time = models.DateTimeField()
	link = models.URLField(max_length=128)
	description = models.TextField()

	def __str__(self):
		return self.name