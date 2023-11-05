from django.contrib.auth.models import User as UsersModel
from rest_framework import serializers
from django.contrib.auth import authenticate

from core.exceptions import UnauthenticatedException, ValidationErrorException


class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsersModel
        fields = ('username', 'email', 'first_name', 'last_name')


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsersModel
        fields = ('username', 'email', 'first_name', 'last_name', 'password')

    def create(self, validated_data):
        user = UsersModel.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        user.set_password(validated_data['password'])
        user.save()

        return user

    def validate(self, attrs):
        username = attrs.get('username')
        email = attrs.get('email')

        if UsersModel.objects.filter(username=username).exists():
            msg = 'Username is already taken'
            raise ValidationErrorException(msg)

        if UsersModel.objects.filter(email=email).exists():
            msg = 'email is already registered'
            raise ValidationErrorException(msg)

        return attrs

    def to_representation(self, instance):
        data = super(CreateUserSerializer, self).to_representation(instance)
        del data['password']
        return data


class UserSigninSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        if username and password:
            user = authenticate(username=username, password=password)
            if not user:
                msg = 'Unable to log in with provided credentials.'
                raise UnauthenticatedException(msg)
        else:
            msg = 'Must include "username" and "password".'
            raise UnauthenticatedException(msg)
        return attrs

    def to_representation(self, instance):
        data = super(UserSigninSerializer, self).to_representation(instance)
        del data['password']
        return data
