from .serializers import AnnouncementSerializer
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from Announcements.models import Announcement
from django.contrib.auth.models import User
from datetime import datetime

class AnnouncementViewSet(APIView):
	def post(self, request):
		if request.data['send'] == 'post':
			date_time_now = datetime.now()
			user_sent = User.objects.get(id=request.data['user_id'])
			announcement = Announcement(group=request.data['group'], date_time=date_time_now, user_from=user_sent, content=request.data['content'])
			print(announcement)
			announcement.save()
		announcements = Announcement.objects.all().filter(group=request.data['group'])
		serializer = AnnouncementSerializer(announcements, many=True).data
		return Response(serializer)
