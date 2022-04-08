from django.db import models

# Create your models here.

class Plant(models.Model):
	name = models.CharField(max_length=40, default=None)
	description = models.CharField(max_length=300, default=None)
	image = models.CharField(max_length=50, default=None)
	owner= models.CharField(max_length=20, default=None)

	def __str__(self):
		return f"{self.name} - {self.image}"
