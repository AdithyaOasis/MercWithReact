from rest_framework import serializers
from .models import Project, ProjectMembers
from Clubs.serializers import UserSerializer

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class ProjectListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id','project_Name','description']

class ProjectMemberSerializer(serializers.ModelSerializer):
    member = UserSerializer()
    class Meta:
        model = ProjectMembers
        fields = '__all__'
#bound to change