from rest_framework import serializers
from .models import TodoTask
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class TodoTaskSerializer(serializers.ModelSerializer):
	created_by = UserSerializer()
	assigned_to = UserSerializer()
    
	class Meta:
		model = TodoTask
		fields = '__all__'
