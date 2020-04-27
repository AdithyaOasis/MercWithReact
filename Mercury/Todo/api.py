from .serializers import TodoTaskSerializer
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import TodoTask
from django.contrib.auth.models import User
from datetime import datetime

class TodoTaskViewSet(APIView):
	def post(self, request):
		if request.data['send'] == 'post':
			date_time_now = datetime.now()
			user_created_by = User.objects.get(id=request.data['user_created_by_id'])
			user_assigned_to = User.objects.get(id=request.data['user_assigned_to_id'])
			task = TodoTask(group=request.data['group'], date_time_created=date_time_now, created_by=user_created_by, assigned_to=user_assigned_to, task_content=request.data['task_content'])
			print(task)
			task.save()
		if request.data['send'] == 'delete':
			TodoTask.objects.all().filter(id=request.data['delete_id']).delete()
		todo = TodoTask.objects.all().filter(group=request.data['group'])
		serializer = TodoTaskSerializer(todo, many=True).data
		return Response(serializer)
