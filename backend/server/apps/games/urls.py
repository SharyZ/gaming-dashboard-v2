from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

from apps.games.views import GameViewSet

router = DefaultRouter()

router.register("games", GameViewSet, basename="games")

games_urlpatterns = [url('api/v1/', include(router.urls))]
