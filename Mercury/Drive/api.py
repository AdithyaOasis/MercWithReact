from .serializers import DriveSerializer
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Drive
from django.contrib.auth.models import User
from datetime import datetime

class DriveViewSet(APIView):
	def post(self, request):
		if request.data['send'] == 'post':
			date_time_now = datetime.now()
			user_created_by = User.objects.get(id=request.data['user_id'])
			new_link = Drive(link_type=request.data['link_type'], link=request.data['link'], date_created=date_time_now, link_name=request.data['link_name'], created_by=user_created_by, group=request.data['group'])
			print(new_link)
			new_link.save()
		if request.data['send'] == 'delete':
			Drive.objects.all().filter(id=request.data['delete_id']).delete()
		drive = Drive.objects.all().filter(group=request.data['group'])
		serializer = DriveSerializer(drive, many=True).data
		return Response(serializer)
