from rest_framework import serializers
from .models import Drive
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class DriveSerializer(serializers.ModelSerializer):
    created_by = UserSerializer()
    class Meta:
        model = Drive
        fields = '__all__'
