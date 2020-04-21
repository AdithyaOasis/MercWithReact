<<<<<<< HEAD
from .serializers import ClubSerializer
from rest_framework import viewsets, permissions, generics
from rest_framework.views import APIView
from rest_framework.response import Response

=======
from .serializers import ClubSerializer, MembersSerializer
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
>>>>>>> 85a882e7a79fe88ffdf3cfa6ea58b2a4ee8c8b57
from Clubs.models import Club

class ClubViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = ClubSerializer

<<<<<<< HEAD

class NewViews(APIView):
	def post(self,request):
		club = Club.objects.get(id=request.data['id'])
		serializer = ClubSerializer(club).data
		return Response(serializer)

=======
class NewClubViewSet(APIView):
    def get(self, request):
        club = Club.objects.get(id=request.data['id'])
        serializer = ClubSerializer(club).data
        return Response(serializer)

class ClubMemberViewSet(APIView):
    def post(self, request):
        members = Club.objects.get(club_name=request.data['club_name']).member.all()
        serializer = MembersSerializer(members, many=True).data
        return Response(serializer)

class MembersViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = MembersSerializer
>>>>>>> 85a882e7a79fe88ffdf3cfa6ea58b2a4ee8c8b57
