from .serializers import ClubSerializer
from rest_framework import viewsets, permissions, generics
from rest_framework.views import APIView
from rest_framework.response import Response

from Clubs.models import Club


class ClubViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = ClubSerializer


class NewViews(APIView):
	def post(self,request):
		club = Club.objects.get(id=request.data['id'])
		serializer = ClubSerializer(club).data
		return Response(serializer)

