# Generated by Django 4.2.2 on 2023-06-17 13:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_alter_skill_last_updated_alter_skill_pub_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skill',
            name='last_updated',
            field=models.DateTimeField(auto_now=True, verbose_name='last updated'),
        ),
        migrations.AlterField(
            model_name='skill',
            name='pub_date',
            field=models.DateTimeField(auto_now=True, verbose_name='date published'),
        ),
    ]