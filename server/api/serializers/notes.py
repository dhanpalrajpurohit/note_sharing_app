from rest_framework import serializers
from api.models import Note


class NoteCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note


class NoteDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
