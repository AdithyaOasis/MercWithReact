from rest_framework import serializers
from Chat.models import Chat
from django.contrib.auth.models import User
from Accounts.serializers import UserSerializer

class ChatSerializer(serializers.ModelSerializer):
    user_from = UserSerializer()
    class Meta:
        model = Chat
        fields = '__all__'
