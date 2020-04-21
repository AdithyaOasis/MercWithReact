from rest_framework import serializers
from Clubs.models import Club
from django.contrib.auth.models import User



class ClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = '__all__'

class MembersSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = '__all__'
