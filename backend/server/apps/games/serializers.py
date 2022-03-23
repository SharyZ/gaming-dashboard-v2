from rest_framework import serializers

from apps.games.models import Game


class GameSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name')

    class Meta:
        model = Game
        fields = (
            "id",
            "cover_small",
            "cover_normal",
            "cover_big",
            "title",
            "category",
            "category_name",
            "description",
            "created_at",
        )
