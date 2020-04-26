from django.urls import path, include
from .api import ProjectViewSet, ClubProjectViewSet, ProjectMemberView
from rest_framework import routers

router = routers.DefaultRouter()
urlpatterns = [
    path("api/projects/project", ClubProjectViewSet.as_view()),
    path("api/projects", ProjectViewSet.as_view()),
    path("api/projects/members",ProjectMemberView.as_view())
]

urlpatterns += router.urls
