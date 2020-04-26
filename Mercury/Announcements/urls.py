from django.urls import path, include
from .api import AnnouncementViewSet
from rest_framework import routers

router = routers.DefaultRouter()

#router.register('api/announcements', AnnouncementViewSet, 'Announcements')

urlpatterns = [
    path("api/announcements", AnnouncementViewSet.as_view()),
]

urlpatterns += router.urls
