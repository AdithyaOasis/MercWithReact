# Generated by Django 2.2.8 on 2020-04-17 13:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Clubs', '0002_auto_20200417_1833'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='club',
            name='projects',
        ),
    ]
