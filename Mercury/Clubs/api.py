from .serializers import ClubSerializer
from rest_framework import viewsets, permissions

from Clubs.models import Club


class ClubViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = ClubSerializer
