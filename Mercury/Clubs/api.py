from .serializers import ClubSerializer, MembersSerializer
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from Clubs.models import Club, Members

class ClubViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = ClubSerializer


class NewClubViewSet(APIView):
    def post(self, request):
        club = Club.objects.get(id=request.data['id'])
        serializer = ClubSerializer(club).data
        return Response(serializer)

class ClubMemberViewSet(APIView):
    def post(self, request):
        members = filter(lambda mem: mem.club.club_name == request.data['club_name'] , Members.objects.all())
        serializer = MembersSerializer(members, many=True).data
        return Response(serializer)

class MembersViewSet(viewsets.ModelViewSet):
    queryset = Members.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = MembersSerializer
