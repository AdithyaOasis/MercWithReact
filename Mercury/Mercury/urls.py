
from django.contrib import admin
from django.urls import path, include
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    #path('', include('Main.urls')),
    path('', include('Clubs.urls')),
    path('', include('Projects.urls')),
    path('', include('Accounts.urls')),
    path('', include('Events.urls')),
    path('', include('Announcements.urls')),
    path('', include('Chat.urls')),
    path('', include('Drive.urls')),
    path('', include('Todo.urls')),
    path('', include('Profile.urls')),
    
]
