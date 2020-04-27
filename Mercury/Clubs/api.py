from .serializers import ClubSerializer, MembersSerializer, ClubListSerializer
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from Clubs.models import Club, Members
from Projects.models import Project
from django.contrib.auth.models import User
from Projects.serializers import ProjectSerializer
class ClubListViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = ClubListSerializer


class ClubViewSet(APIView):
    def post(self, request):
        club = Club.objects.get(id=request.data['id'])
        serializer = ClubSerializer(club).data
        admins = User.objects.filter(club = club,members__member_Type = "admin")
        dict = {}
        for i in admins:
            dict[i.id] = i.username
        return Response({
            "club":serializer,
            "admins":dict
            })


class ClubMemberViewSet(APIView):
    def post(self, request):
        members = filter(lambda mem: mem.club.club_name ==
                         request.data['club_name'], Members.objects.all())
        serializer = MembersSerializer(members, many=True).data
        return Response(serializer)


class MembersViewSet(viewsets.ModelViewSet):
    queryset = Members.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = MembersSerializer

#admin making project assigning supervisor
#supervisor able to add members of the users to the club
#Right now admins use the api to add supervisors and members
#To edit it to make sure only admins can add , so we require authorizations as well
class ClubProject(APIView):
    def post(self, request):
        #club id
        #project name
        #project desc
        #supervisor
        projectName = request.data['projectname']
        clubId = request.data['clubid']
        adminId = request.data['adminid']
        supervisorId = request.data['supervisorid']
        projectDescription = request.data['description']
        projectMembers = request.data['memberids']
        club = Club.objects.get(id = clubId)
        p1 = Project.objects.create(project_Name = projectName,description = projectDescription)
        admin = User.objects.get(id = adminId)
        p1.member.add(admin, through_defaults = {'member_Type':'supervisor'})
        supervisor = User.objects.get(id = supervisorId)
        p1.member.add(supervisor, through_defaults = {'member_Type':'supervisor'})
        for i in projectMembers:
            member = User.objects.get(id = i)
            p1.member.add(meqmber, through_defaults = {'member_Type':'member'})
        club.projects.add(p1)
        serializer = ProjectSerializer(p1).data
        return Response(serializer)

        
