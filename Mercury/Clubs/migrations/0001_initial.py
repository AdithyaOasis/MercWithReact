# Generated by Django 2.2.8 on 2020-04-17 13:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Club',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('club_name', models.CharField(max_length=100)),
                ('date_Started', models.DateField(blank=True, null=True)),
                ('reg_Link', models.CharField(blank=True, max_length=200)),
                ('club_Link', models.CharField(blank=True, max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Members',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('member_Type', models.CharField(max_length=20)),
                ('date_Joined', models.DateField(blank=True, null=True)),
                ('club', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Clubs.Club')),
                ('member', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='club',
            name='member',
            field=models.ManyToManyField(through='Clubs.Members', to=settings.AUTH_USER_MODEL),
        ),
    ]
