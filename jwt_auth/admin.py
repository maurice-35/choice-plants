from django.contrib import admin
from django.contrib.auth import get_user_model # This gets our custom model

User = get_user_model()  # get current user model

admin.site.register(User)
