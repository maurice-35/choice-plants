from django.db import models

# Create your models here.
class Comment(models.Model):
		text = models.TextField(max_length=300)
		created_at = models.DateTimeField(auto_now_add=True)
		plant = models.ForeignKey(
			"plants.Plant",  # this define the table where the ralationship is going to be with
			related_name = "comments", #This is wher the comment will be called in a plant lookup
			on_delete = models.CASCADE
		)
		owner = models.ForeignKey(
			"jwt_auth.User", 
			related_name="comments",
			on_delete = models.CASCADE
		)

		def __self__(self):
				return f"comments: {self.text}"