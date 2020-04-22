from rest_framework import serializers
from Clubs.models import Club, Members
from django.contrib.auth.models import User



class ClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = '__all__'



class MembersSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Members
        fields = '__all__'

