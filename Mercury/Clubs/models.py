from django.db import models
#from Main.models import User
from django.contrib.auth.models import User
from Projects.models import Project
# Create your models here.
class Club(models.Model):
	club_name = models.CharField(max_length=100)  #Changed n to N
	member = models.ManyToManyField(User, through = 'Members')
	projects = models.ManyToManyField(Project)
	date_Started = models.DateField(blank=True,null=True)
	reg_Link = models.CharField(max_length = 200, blank = True)
	club_Link = models.CharField(max_length = 200,blank = True)
	def __str__(self):
		return self.club_name
	def startedNow(self):
		return self.date_Started >= datetime.date.today() 	

class Members(models.Model):
	member = models.ForeignKey(User, on_delete = models.CASCADE)
	club = models.ForeignKey(Club, on_delete = models.CASCADE)
	member_Type = models.CharField(max_length = 20)
	date_Joined = models.DateField(blank=True,null=True)
	def __str__(self):
			p = self.club.club_name + '/' + self.member.username
			return p

#After the completion of the to - do database create manytomany with it in clubs
