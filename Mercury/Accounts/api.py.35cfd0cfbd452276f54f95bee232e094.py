from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from knox.auth import TokenAuthentication
from django.contrib.auth.models import User
import json
# Register API


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        dict = {}
        return Response({
            "user": UserSerializer(user,
                                   context=self.get_serializer_context()).data,
            "clubs": dict,
            "projects": dict,
            "token": AuthToken.objects.create(user)[1]

        })

# LOGIN API


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        u = User.objects.get(username=user.username)
        clublist = u.members_set.all()
        projectlist = u.project_set.all()
        clubs = {}
        projects = {}
        for i in projectlist:
            projects[i.id] = i.project_Name
        for i in clublist:
            clubs[i.club.id] = i.club.club_name
            
        return Response({
            "user": UserSerializer(user,
                                   context=self.get_serializer_context()).data,
            "clubs": clubs,
            "projects": projects,

            "token": AuthToken.objects.create(user)[1]

        })


# GET USER API
