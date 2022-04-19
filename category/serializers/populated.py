from plants.serializers.common import PlantSerializer
from .common import CategorySerializer

class PopulatedCategorySerializer(CategorySerializer):
		plants = PlantSerializer(many=True)
		