from django.contrib.auth.models import User as UsersModel
from rest_framework import serializers
from django.contrib.auth import authenticate



class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsersModel
        fields = ('username', 'email', 'first_name', 'last_name')


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsersModel
        fields = ('username', 'email', 'first_name', 'last_name', 'password1')


class UserSigninSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        if username and password:
            user = authenticate(request=self.context.get('request'),
                                username=username, password=password)

            if not user:
                msg = _('Unable to log in with provided credentials.')
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = _('Must include "username" and "password".')
            raise serializers.ValidationError(msg, code='authorization')

        attrs['user'] = user
        return attrs
