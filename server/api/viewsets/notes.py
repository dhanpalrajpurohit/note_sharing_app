from django.http import Http404
from django.contrib.auth.models import User as UsersModel
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api.serializers import NoteCreateSerializer, NoteDetailSerializer


class NotesAPIView(APIView):

    def post(self, request):
        serializer = NoteCreateSerializer(request.data)
        serializer.is_valid()
        serializer.save()
        Response(status=200)



