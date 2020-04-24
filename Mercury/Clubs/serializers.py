from rest_framework import serializers
from Clubs.models import Club, Members
from django.contrib.auth.models import User


class ClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = "__all__"


class ClubListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = ['id', 'club_name', 'description']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class MembersSerializer(serializers.ModelSerializer):
    club = ClubSerializer()
    member = UserSerializer()

    class Meta:
        model = Members
        fields = '__all__'
