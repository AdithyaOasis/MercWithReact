from django.urls import path, include
from .api import DriveViewSet
from rest_framework import routers

router = routers.DefaultRouter()

urlpatterns = [
    path("api/drive", DriveViewSet.as_view()),
]

urlpatterns += router.urls
