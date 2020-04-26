from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class TodoTask(models.Model):
	group = models.CharField(max_length=200)
	date_time_created = models.DateTimeField()
	created_by  = models.ForeignKey(User, related_name='task_created', on_delete=models.CASCADE)
	assigned_to = models.ForeignKey(User, related_name='task_assigned', on_delete=models.CASCADE)
	task_content = models.TextField()
	
	def __str__(self):
		return "/".join([self.created_by.username, self.assigned_to.username, self.group, self.task_content])
