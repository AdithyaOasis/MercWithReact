# Generated by Django 2.2.8 on 2020-03-29 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Main', '0004_auto_20200329_0116'),
        ('Projects', '0002_auto_20200327_0110'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='working_Users',
            field=models.ManyToManyField(to='Main.User'),
        ),
    ]
