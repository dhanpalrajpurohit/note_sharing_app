from django.http import Http404
from django.contrib.auth.models import User as UsersModel
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken


from api.serializers.users import UserDetailsSerializer, CreateUserSerializer
from api.serializers import UserSigninSerializer


class UsersAPIView(APIView):
    def get(self, request):
        users = UsersModel.objects.all()
        serializer = UserDetailsSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CreateUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserAPIView(APIView):
    def get(self, request, username:str):
        users = UsersModel.objects.get(username=username)
        serializer = UserDetailsSerializer(users)
        return Response(serializer.data)

    def put(self, request, username: str):
        user = UsersModel.objects.get(username=username)
        serializer = CreateUserSerializer(instance=user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SignInAPIView(APIView):
    def post(self, request, username: str):
        serializer = UserSigninSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        username = serializer.validated_data.get("username")
        password = serializer.validated_data.get("password")
        user = authenticate(username=username, password=password)
        if user is not None:
            return Response()
        e

class SignUPAPIView(APIView):
    def post(self, request, username: str):
        pass