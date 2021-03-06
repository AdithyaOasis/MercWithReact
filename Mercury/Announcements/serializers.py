from rest_framework import serializers
from Announcements.models import Announcement
from django.contrib.auth.models import User
from Accounts.serializers import UserSerializer


class AnnouncementSerializer(serializers.ModelSerializer):
    user_from = UserSerializer()
    class Meta:
        model = Announcement
        fields = '__all__'
