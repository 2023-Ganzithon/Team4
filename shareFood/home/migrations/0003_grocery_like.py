# Generated by Django 4.2.7 on 2023-11-09 05:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('home', '0002_rename_writer_delivery_user_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='GroceryLike',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('post', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='grocery_like', to='home.grocery')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='grocery_like', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]