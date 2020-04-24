from django.urls import path, include
from .api import ProjectViewSet, ClubProjectViewSet
from rest_framework import routers

router = routers.DefaultRouter()
urlpatterns = [
    path("api/projects/project", ClubProjectViewSet.as_view()),
    path("api/projects", ProjectViewSet.as_view())

]

urlpatterns += router.urls
