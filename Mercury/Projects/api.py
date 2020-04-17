from .serializers import ProjectSerializer
from rest_framework import viewsets, permissions

from .models import Project


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = ProjectSerializer
