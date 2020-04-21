from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from .models import Club
from Projects.models import Project

'''
def home(request,club_id):
	The_Club = Club.objects.get(id=club_id)
	return render(request,"Clubs/home.html",{'Club':The_Club})

def projectList(request,club_id):
	The_Club = Club.objects.get(id = club_id)
	List = The_Club.projects.filter()
	return render(request,"Clubs/projectList.html",{'List':List,'Club':The_Club})

def memberList(request,club_id):
	The_Club = Club.objects.get(id = club_id)
	admins = The_Club.member.filter(members__member_Type = 'admin')
	sub_admins = The_Club.member.filter(members__member_Type = 'sub_admin')
	members = The_Club.member.filter(members__member_Type = 'member')
	return render(request,"Clubs/MemberList.html",{'Club':The_Club,'admins':admins,'sub_admins':sub_admins,'members':members})
'''
