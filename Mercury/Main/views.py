from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from Clubs.models import Club
# Create your views here.


def home(request):  # not logged in
    return render(request, 'Main/Home.html')


'''
def clubList(request):
	List=Club.objects.filter()
	return render(request,'Main/club_List.html',{'clubs':List})

def profile(request):
	return HttpResponse("No")'''
