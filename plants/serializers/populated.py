from comments.serializers.populated import PopulatedCommentSerializer
from ..serializers.common import PlantSerializer
from category.serializers.common import CategorySerializer
# from .common import PlantSerializer
from jwt_auth.serializer import UserSerializer


class PopulatedPlantSerializer(PlantSerializer): # pass Plant object through
		
		comments = PopulatedCommentSerializer(many=True) # adding a field to the Plant object called comments
		category = CategorySerializer(many=True) # adding a field to the Plant object called category
		owner = UserSerializer()