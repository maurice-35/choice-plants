from rest_framework.authentication import BasicAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt

User = get_user_model()

class JWTAuthentication(BasicAuthentication):

		def authenticate(self, request):
		# get the token from request
			header = request.headers.get('Authorization')

		# if no token in the header, return None
			if not header:
					return None

		# if the token is in the incorrect format, throw error
			if not header.startswith('Bearer'):
					raise PermissionDenied(detail="Invalid token")

		# if token does starts with 'Bearer', need to remove and replace with empty string
			token = header.replace('Bearer ', '')

			try:     # information about user that lives in the token
					payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
					print('PAYLOAD', payload)
					user = User.objects.get(pk=payload.get('sub'))
			except jwt.exceptions.InvalidTokenError:
					raise PermissionDenied(detail='Invalid token')
			except User.DoesNotExist:
					raise PermissionDenied(detail='user not found')

			return (user, token) # if user is found