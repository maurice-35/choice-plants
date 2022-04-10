from rest_framework.views import APIView  # class which decides the format of data to send back in json
from rest_framework.response import Response # method to send back response
from rest_framework import status # methods to send back status code

from .models import Plant
from .serializers import PlantSerializer

class PlantListView(APIView):

	def get(self, _request):
		plants = Plant.objects.all() # get everything from the plant in the db
		print('PLANT 🏮', plants)
		serialized_plants = PlantSerializer(plants, many=True) # Transforms data into python by running through serializer
		print('SERIALIZED', serialized_plants.data)
		return Response(serialized_plants.data, status=status.HTTP_200_OK) # return data and status code

class PlantDetailView(APIView):

	def get_plant(self, pk):  # getting an item from th db
		try:
			return Plant.objects.get(pk=pk)
		except Plant.DoesNotExist:
			raise NotFound(detail="🏮 can't find that plant")

	def get(self, _request, pk):
		plant = self.get_plant(pk=pk)
		serialized_plant = PlantSerializer(plant)
		return Response(serialized_plant.data, status=status.HTTP_200_OK)


