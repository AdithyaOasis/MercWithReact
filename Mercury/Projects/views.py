from django.shortcuts import render

from .models import Project
from Clubs.models import Club
# Create your views here.

def Home(request,pro_no):
	project = Project.objects.get(id = pro_no)
	return render(request,'Projects/Home.html',{'project':project})
def member_List(request,pro_no):
	project = Project.objects.get(id = pro_no)
	List = project.working_Users.filter()
	return render(request,"Projects/MemberList.html",{'project':project,'members':List})