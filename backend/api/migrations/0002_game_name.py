# Generated by Django 2.2 on 2019-04-21 01:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='name',
            field=models.CharField(default='default', max_length=255),
        ),
    ]
