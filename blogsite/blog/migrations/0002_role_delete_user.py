# Generated by Django 4.0.1 on 2022-04-01 04:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('email', models.CharField(max_length=250)),
                ('password', models.CharField(max_length=250)),
            ],
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
