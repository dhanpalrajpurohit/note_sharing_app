from django.http import Http404
from django.contrib.auth.models import User as UsersModel
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status

from api.models import Note
from api.serializers import NoteCreateSerializer, NoteDetailSerializer


class NotesAPIView(APIView):
    authentication_classes = (TokenAuthentication, )

    def get(self, request):
        user = UsersModel.objects.get(username=request.user.username)
        notes = Note.objects.filter(user=user)
        serializer = NoteDetailSerializer(notes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = NoteCreateSerializer(request.data)
        serializer.is_valid()
        serializer.save()
        return JsonResponse(serializer.data, status=status.HTTP_204_NO_CONTENT)


class NoteAPIView(APIView):
    def get(self, request, pk: int):
        serializer = NoteDetailSerializer(request.data)
        serializer.is_valid()
        serializer.save()
        return JsonResponse(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk: int):
        instance = Note.objects.get(id=pk)
        serializer = NoteDetailSerializer(instance, request.data)
        serializer.is_valid()
        serializer.save()
        return JsonResponse(serializer.data, status=status.HTTP_204_NO_CONTENT)

    def delete(self, pk: int):
        instance = Note.objects.get(id=pk)
        instance.delete()
        return JsonResponse(status=status.HTTP_204_NO_CONTENT)



