# todos/api/views.py

from rest_framework import viewsets, permissions  # added permissions

from .serializers import UserProfileSerializer
from rest_framework.views import APIView
# from todos.models import Todo  # remove
from django.contrib.auth.models import User
from Profile.models import UserProfile
from rest_framework.response import Response

class UserProfileView(APIView):
    def post(self, request):
        if request.data['send'] == 'post':
            user_bio=request.data['bio']
            user_agen=request.data['agen']
            selected_user= User.objects.get(id=request.data['user_id'])
            selected_user.username=request.data['username']
            user_name=request.data['name']
            user_dob=request.data['dob']
            user_number=request.data['number']
            selected_user.email=request.data['email']
            profiles = UserProfile.objects.get(user__id=request.data['user_id'])
            #profiles(bio=user_bio,number=user_number,agen=user_agen,name=user_name,dob=user_dob)
            profiles.name=user_name
            profiles.bio=user_bio
            profiles.name=user_name
            profiles.dob=user_dob
            profiles.number=user_number
            profiles.agen=user_agen
            profiles.save()
            selected_user.save()
        profile = UserProfile.objects.all().filter(user__id = request.data['user_id'])
        serializer =UserProfileSerializer(profile, many=True).data
        return Response(serializer)
        
             
		
        # profile = UserProfile.objects.all().filter(user__id = request.data['user_id'])
        # serializer =UserProfileSerializer(profile, many=True).data
        # return Response(serializer)
    
        