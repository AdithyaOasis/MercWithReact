# Generated by Django 2.2.8 on 2020-03-30 14:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Clubs', '0006_auto_20200330_1924'),
    ]

    operations = [
        migrations.RenameField(
            model_name='club',
            old_name='club_Name',
            new_name='club_name',
        ),
    ]
