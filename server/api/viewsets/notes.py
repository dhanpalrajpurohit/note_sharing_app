from django.http import Http404
from django.contrib.auth.models import User as UsersModel
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework import status

from api.models import Note
from api.serializers import NoteCreateSerializer, NoteDetailSerializer


class NotesAPIView(APIView):

    def get(self, request, username: str):
        user = UsersModel.objects.get(username=username)
        notes = Note.objects.filter(user=user)
        return JsonResponse(NoteDetailSerializer(notes).data, status=status.HTTP_200_OK)

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



