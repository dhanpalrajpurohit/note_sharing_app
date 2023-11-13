from django.contrib.auth.models import User as UsersModel
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from rest_framework import status
from rest_framework.authtoken.models import Token



from api.serializers.users import UserDetailsSerializer, CreateUserSerializer
from api.serializers import UserSigninSerializer


class UsersAPIView(APIView):
    def get(self, request):
        users = UsersModel.objects.all()
        serializer = UserDetailsSerializer(users, many=True)
        return JsonResponse(serializer.data)

    def post(self, request):
        serializer = CreateUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserAPIView(APIView):
    def get(self, request, username:str):
        users = UsersModel.objects.get(username=username)
        serializer = UserDetailsSerializer(users)
        return JsonResponse(serializer.data)

    def put(self, request, username: str):
        user = UsersModel.objects.get(username=username)
        serializer = CreateUserSerializer(instance=user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SignInAPIView(APIView):
    def post(self, request):
        serializer = UserSigninSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        if serializer is not None:
            user = UsersModel.objects.get(username=serializer.validated_data['username'])
            token, _ = Token.objects.get_or_create(user=user)
            response = {}
            response['user'] = UserDetailsSerializer(user).data
            response['token'] = token.key
            return JsonResponse(response, status=status.HTTP_200_OK)
        else:
            return JsonResponse(serializer.errors, data=status.HTTP_401_UNAUTHORIZED)


class SignUPAPIView(APIView):
    def post(self, request):
        serializer = CreateUserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        if serializer is not None:
            return JsonResponse(serializer.data, status=status.HTTP_200_OK)
        else:
            return JsonResponse(serializer.errors, data=status.HTTP_400_BAD_REQUEST)