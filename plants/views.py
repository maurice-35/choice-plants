from rest_framework.views import APIView  # class which decides the format of data to send back in json
from rest_framework.response import response # method to send back response
from rest_framework import status # methods to send back status code

from .models import Plants
from .serializers import PlantSerializer

class PlantListView(APIView):

	def get(self, _request):
		plants = Plant.objects.all() # get everything from the plant in the db
		serialized_plants = PlantSerializer(plants, many=True) # Transforms data into python by running through serializer
		return Response(serialized_plants.data, status=status.HTTP_200_OK) # return data and status code
