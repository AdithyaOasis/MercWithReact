from .serializers import ProjectSerializer, ProjectListSerializer, ProjectMemberSerializer
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from Clubs.models import Club
from .models import Project, ProjectMembers


class ProjectViewSet(APIView):
    def post(self, request):
        project = Project.objects.get(id=request.data['id'])
        serializer = ProjectSerializer(project).data
        return Response(serializer)


class ClubProjectViewSet(APIView):
    def post(self, request):
        clubGiven = Club.objects.get(id=request.data['id'])
        projectList = clubGiven.projects.all()
        serializer = ProjectListSerializer(projectList, many=True).data
        return Response(serializer)

class  ProjectMemberView(APIView):
    def post(self,request):
        project_Given = Project.objects.get(id=request.data['id'])
        projectMembers = ProjectMembers.objects.filter(project = project_Given)
        serializer = ProjectMemberSerializer(projectMembers,many = True).data
        return Response(serializer)

