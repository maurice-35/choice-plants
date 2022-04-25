from comments.serializers.populated import PopulatedCommentSerializer
from category.serializers.common import CategorySerializer
from .common import PlantSerializer


class PopulatedPlantSerializer(PlantSerializer): # pass Plant object through
		comments = PopulatedCommentSerializer(many=True) # adding a field to the Plant object called comments
		category = CategorySerializer(many=True) # adding a field to the Plant object called category