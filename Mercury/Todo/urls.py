from django.urls import path, include
from .api import TodoTaskViewSet
from rest_framework import routers

router = routers.DefaultRouter()

urlpatterns = [
    path("api/todo", TodoTaskViewSet.as_view()),
]

urlpatterns += router.urls
