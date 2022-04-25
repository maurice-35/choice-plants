from jwt_auth.serializers import UserSerializer
from .common import CommentSerializer

class PopulatedCommentSerializer(CommentSerializer):
    owner = UserSerializer()