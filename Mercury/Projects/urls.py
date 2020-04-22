from django.urls import path, include
from .api import ProjectViewSet, ClubProjectViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/projects', ProjectViewSet, 'Projects')
urlpatterns = [
    path("api/projects/project",ClubProjectViewSet.as_view())
]

urlpatterns += router.urls
