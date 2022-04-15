from comments.serializers.common import CommentSerializer
from .common import PlantSerializer

class PopulatedPlantSerializer(PlantSerializer): # pass Plant object through
		comments = CommentSerializer(many=True) # adding a field to the Plant object called comments
		