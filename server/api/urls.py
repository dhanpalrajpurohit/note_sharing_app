from django.contrib import admin
from django.urls import path, include

from api.viewsets import UsersAPIView, UserAPIView

urlpatterns = [
    path('/users', UsersAPIView.as_view(), name='users'),
    path('/user/<int:pk>/', UserAPIView.as_view(), name='user'),
    path('notes')
]
