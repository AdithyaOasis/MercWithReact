from .serializers import ChatSerializer
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from Chat.models import Chat
from django.contrib.auth.models import User
from datetime import datetime

class ChatViewSet(APIView):
	def post(self, request):
		if request.data['send'] == 'post':
			date_time_now = datetime.now()
			user_sent = User.objects.get(id=request.data['user_id'])
			message = Chat(group=request.data['group'], date_time=date_time_now, user_from=user_sent, content=request.data['content'])
			print(message)
			message.save()
		messages = Chat.objects.all().filter(group=request.data['group'])
		serializer = ChatSerializer(messages, many=True).data
		return Response(serializer)
