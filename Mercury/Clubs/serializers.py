from rest_framework import serializers
from Clubs.models import Club
from django.contrib.auth.models import User



class ClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = '__all__'

<<<<<<< HEAD

=======
class MembersSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = '__all__'
>>>>>>> 85a882e7a79fe88ffdf3cfa6ea58b2a4ee8c8b57
