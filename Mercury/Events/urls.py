from django.urls import path, include
from .api import EventViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/events', EventViewSet, 'Events')

urlpatterns = router.urls
