from django.db import models

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Game(models.Model):
    cover_small = models.ImageField(
        upload_to='games/small/', help_text='Image size 70x62')
    cover_normal = models.ImageField(
        upload_to='games/normal/', help_text='Image size 200x250')
    cover_big = models.ImageField(
        upload_to='games/big/', help_text='Image size 1280x720 or above')
    title = models.CharField(max_length=150)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def delete(self):
        self.cover_small.storage.delete(self.cover_small.name)
        self.cover_normal.storage.delete(self.cover_normal.name)
        self.cover_big.storage.delete(self.cover_big.name)

        super().delete()

    def __str__(self):
        return self.title
