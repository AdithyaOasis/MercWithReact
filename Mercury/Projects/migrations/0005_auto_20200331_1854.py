# Generated by Django 2.2.8 on 2020-03-31 13:24

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Projects', '0004_auto_20200330_2155'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='description',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='working_Users',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
    ]
