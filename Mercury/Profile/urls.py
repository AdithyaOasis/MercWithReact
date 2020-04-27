from django.urls import path, include
from .api import UserProfileView
from rest_framework import routers
from knox import views as knox_views


  
from rest_framework import routers

router = routers.DefaultRouter()

urlpatterns = [
    path("api/profile", UserProfileView.as_view()),
]

urlpatterns += router.urls
