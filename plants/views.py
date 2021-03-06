from rest_framework.views import APIView  
from rest_framework.response import Response 
from rest_framework import status 
from rest_framework.exceptions import NotFound 
from rest_framework.permissions import IsAuthenticatedOrReadOnly 

from .models import Plant
from .serializers.common import PlantSerializer
from .serializers.populated import PopulatedPlantSerializer

class PlantListView(APIView):
		permission_classes = (IsAuthenticatedOrReadOnly, )

		def get(self, _request):
			plants = Plant.objects.all() # get everything from the plant in the db
			serialized_plants = PopulatedPlantSerializer(plants, many=True) # Transforms data into python by running through serializer
			return Response(serialized_plants.data, status=status.HTTP_200_OK) # return data and status code

		def post(self, request): 
			request.data['owner'] = request.user.id
			print('REQUEST DATA', request.data )
			plant_to_add = PlantSerializer(data=request.data)
			if plant_to_add.is_valid():
					plant_to_add.save()
					print('PLANT TO ADD', plant_to_add)
					return Response(plant_to_add.data, status=status.HTTP_201_CREATED)
			return Response(plant_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class PlantDetailView(APIView):
		permission_classes = (IsAuthenticatedOrReadOnly, )

		def get_plant(self, pk):  # getting an item from th db
			try:
				return Plant.objects.get(pk=pk)
			except Plant.DoesNotExist:
				raise NotFound(detail="🏮 can't find that plant")

		def get(self, _request, pk):
				plant = self.get_plant(pk=pk)
				serialized_plant = PopulatedPlantSerializer(plant)
				return Response(serialized_plant.data, status=status.HTTP_200_OK)

		def delete(self, _request, pk):
				plant_to_delete = self.get_plant(pk=pk)
				plant_to_delete.delete()
				return Response(status=status.HTTP_204_NO_CONTENT)

		def put(self, request, pk):
			plant_to_edit = self.get_plant(pk=pk)
			updated_plant = PlantSerializer(plant_to_edit, data=request.data)
			if updated_plant.is_valid():
					updated_plant.save()
					return Response(updated_plant.data, status=status.HTTP_202_ACCEPTED)
			return Response(updated_plant.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)



