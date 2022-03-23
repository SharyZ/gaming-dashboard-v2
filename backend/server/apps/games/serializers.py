from rest_framework import serializers

from apps.games.models import Game


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = (
            "id",
            "cover_small",
            "cover_normal",
            "cover_big",
            "title",
            "category",
            "description",
            "created_at",
        )
