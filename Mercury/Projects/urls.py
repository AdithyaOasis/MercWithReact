from django.urls import path, include
from .api import ProjectViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/projects', ProjectViewSet, 'Projects')

urlpatterns = router.urls
