from .serializers import ProjectSerializer
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from Clubs.models import Club
from .models import Project


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = ProjectSerializer

class ClubProjectViewSet(APIView):
    def post(self, request):
        clubGiven = Club.objects.get(id=request.data['id'])
        projectList = clubGiven.projects.all()
        serializer = ProjectSerializer(projectList,many=True).data
        return Response(serializer)

