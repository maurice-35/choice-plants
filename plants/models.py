from django.db import models

# Create your models here.

class Plant(models.Model):
	name = models.CharField(max_length=40, default=None)
	description = models.CharField(max_length=300, default=None)
	image = models.CharField(max_length=150, default=None)
	# owner= models.CharField(max_length=20, default=None)
	category = models.ManyToManyField('category.CATEGORY', related_name="plants")
	owner = models.ForeignKey(
			"jwt_auth.User",
			related_name="plants",
			on_delete = models.CASCADE
	)

	def __str__(self):
		return f"{self.name} - {self.image}"
