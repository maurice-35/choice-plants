from rest_framework.views import APIView 
from rest_framework.response import Response 
from rest_framework import status
from rest_framework.exceptions import PermissionDenied
from datetime import datetime, timedelta
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt

User = get_user_model()
from .serializers import UserSerializer

class RegisterView(APIView):

		def post(self, request):
				user_to_create = UserSerializer(data=request.data)
				if user_to_create.is_valid():
						user_to_create.save()
						return Response({ 'message': 'Registration successful'})
				return Response(user_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

