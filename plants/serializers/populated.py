from comments.serializers.common import CommentSerializer
from category.serializers.common import CategorySerializer
from .common import PlantSerializer


class PopulatedPlantSerializer(PlantSerializer): # pass Plant object through
		comments = CommentSerializer(many=True) # adding a field to the Plant object called comments
		category = CategorySerializer(many=True) # adding a field to the Plant object called category