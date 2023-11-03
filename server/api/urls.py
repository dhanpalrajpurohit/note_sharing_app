from django.contrib import admin
from django.urls import path, include

from api.viewsets import UsersAPIView, UserAPIView

urlpatterns = [
    path('/users', UsersAPIView.as_view(), name='users'),
    path('/user/<int:pk>/', UserAPIView.as_view(), name='user'),
    path('signin/', SignInAPIView.as_view(), name='signin'),
    path('signup/', SignUpAPIView.as_view(), name='signup')
]
