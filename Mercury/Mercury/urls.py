
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
]
