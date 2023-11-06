from django.contrib import admin
from django.urls import path, include

from api.viewsets import NotesAPIView, NoteAPIView, UsersAPIView, UserAPIView, SignInAPIView, SignUPAPIView

urlpatterns = [
    path('users/', UsersAPIView.as_view(), name='users'),
    path('user/<int:pk>/', UserAPIView.as_view(), name='user'),
    path('signin/', SignInAPIView.as_view(), name='signin'),
    path('signup/', SignUPAPIView.as_view(), name='signup'),

    path('notes/', NotesAPIView.as_view(), name='notes'),
    path('note/<int:pk>/', NoteAPIView.as_view(), name='notes'),
]
