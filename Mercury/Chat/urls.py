from django.urls import path, include
from .api import ChatViewSet
from rest_framework import routers

router = routers.DefaultRouter()

#router.register('api/announcements', AnnouncementViewSet, 'Announcements')

urlpatterns = [
    path("api/chat", ChatViewSet.as_view()),
]

urlpatterns += router.urls
