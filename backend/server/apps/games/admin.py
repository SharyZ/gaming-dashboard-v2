from django.contrib import admin

from apps.games.models import Category
from apps.games.models import Game

# Register your models here.

admin.site.register(Category)
admin.site.register(Game)
