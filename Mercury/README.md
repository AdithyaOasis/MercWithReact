# ClubProject
Django-Project

**Make Sure you have postgres installed with "Mercury" database**<br>
After cloning this, All the database peripherals and templates directory path is to be changed
in Mercury/words.py. Refer settings.py when changing.<br>
Then run commands,
python manage.py makemigrations Clubs<br>
python manage.py makemigrations Home<br>
python manage.py makemigrations Projects<br>
python manage.py migrate<br>
and then to run the server,<br>
python manage.py runserver<br>
Make a gitignore file for words.py before pushing back
