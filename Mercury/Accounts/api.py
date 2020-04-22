from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from knox.auth import TokenAuthentication
from django.contrib.auth.models import User
from Clubs.models import Club
from Clubs.serializers import ClubSerializer
import json
# Register API


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response({
            "user": UserSerializer(user,
                                   context=self.get_serializer_context()).data,
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
        list = u.members_set.all()
        #clubList = list(map(lambda item: item.club, list))
        dict = {}
        for i in list:
            dict[i.club.id] = i.club.club_name
        return Response({
            "user": UserSerializer(user,
                                   context=self.get_serializer_context()).data,
            "clubs": dict,

            "token": AuthToken.objects.create(user)[1]

        })


# GET USER API
class UserAPI(generics.RetrieveAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
