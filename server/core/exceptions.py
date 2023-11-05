from rest_framework import status
from rest_framework.exceptions import APIException

from rest_framework.views import exception_handler as base_exception_handler
from datetime import datetime


def exception_handler(exc, context):
    response = base_exception_handler(exc, context)

    if response is not None:
        response.data['message'] = response.data['detail']
        response.data['time'] = datetime.now()
        response.data['status'] = response.status_code
        del response.data['detail']
    return response


class BaseCustomException(APIException):
    detail = None
    status_code = None

    def __init__(self, detail, code):
        super().__init__(detail, code)
        self.detail = detail
        self.status_code = code


class UnauthenticatedException(BaseCustomException):

    def __init__(self, detail):
        super().__init__(detail, status.HTTP_401_UNAUTHORIZED)


class ValidationErrorException(BaseCustomException):
    def __init__(self, detail):
        super().__init__(detail, status.HTTP_400_BAD_REQUEST)