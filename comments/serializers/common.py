from rest_framework import serializers
from ..models import Comment

class CommentSerializer(serializers.ModelSerializer):   # converts table to JSON
		class Meta:
				model = Comment
				fields = '__all__'