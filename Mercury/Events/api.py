from .serializers import EventSerializer
from rest_framework import viewsets, permissions

from Events.models import Event

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = EventSerializer
