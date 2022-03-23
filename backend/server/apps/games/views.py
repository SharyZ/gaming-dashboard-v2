from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from apps.games.models import Game
from apps.games.serializers import GameSerializer

# Create your views here.


class GameViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = GameSerializer
    permission_classes = [IsAuthenticated]
    queryset = Game.objects.all()
