from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers.populated import PopulatedCategorySerializer
from .models import Category

class CategoryListView(APIView):

		def get(self, _request):
				category = Category.objects.all()
				serialized_category = PopulatedCategorySerializer(category, many=True)
				return Response(serialized_category.data, status=status.HTTP_200_OK)
