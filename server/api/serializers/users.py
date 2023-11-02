from django.contrib.auth.models import User as UsersModel
from rest_framework import serializers


class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsersModel
        fields = ('username', 'email', 'first_name', 'last_name')


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsersModel
        fields = ('username', 'email', 'first_name', 'last_name', 'password1')
