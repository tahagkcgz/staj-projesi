from django.urls import include, path
from .views import TeamMemberView, UserCreate, UserDetail, team_refresh
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = routers.DefaultRouter()
router.register(r'team', TeamMemberView)

urlpatterns = [
    path('', include(router.urls)),
    path('api/auth/register/', UserCreate.as_view(), name="register"),
    path('api/auth/me/', UserDetail.as_view(), name="me"),
    path('api-token/', TokenObtainPairView.as_view()),
    path('api-token-refresh/', TokenRefreshView.as_view()),
    path('team-refresh/', team_refresh)
]
