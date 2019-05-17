from django.urls import path, include
from django.conf.urls import url
# from allauth.account.views import confirm_email
from . import views
from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    path('games/<str:guid>/', views.get_game),
    path('log/', views.log),
    path('search/<str:name>', views.search_game),
    path('screenshots/<str:guid>', views.get_screenshots),
    path('games/country/<str:publisher_id>', views.get_game_country),
    path('popular/', views.get_popular_games),
    path('igdb/cover/<int:cover_id>', views.get_igdb_cover),
    path('users/', include('users.urls')),
]
