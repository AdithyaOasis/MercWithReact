"""ClubMain URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include
from .api import ClubListViewSet, MembersViewSet, ClubViewSet, ClubMemberViewSet, ClubProject
from rest_framework import routers

router = routers.DefaultRouter()


router.register('api/clubs/members', MembersViewSet, 'Clubs')  #Get all members of all clubs
router.register('api/clubs', ClubListViewSet, 'Clubs')   #Get list of all clubs, only name and id tho

urlpatterns = [
    path("api/clubs/club", ClubViewSet.as_view()),  #Get all the particular club details
    path("api/clubs/members/member", ClubMemberViewSet.as_view()), #To view the list of members in the club
    path("api/clubs/projects",ClubProject.as_view(), ) #To add projects into the club

]

urlpatterns += router.urls
