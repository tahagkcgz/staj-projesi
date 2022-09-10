from django.urls import include, path
from .views import TeamMemberView, UserCreate, UserDetail
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('api/auth/register/', UserCreate.as_view(), name="register"),
    path('api/auth/me/', UserDetail.as_view(), name="me"),
    path('api-token/', TokenObtainPairView.as_view()),
    path('api-token-refresh/', TokenRefreshView.as_view()),
    path('team/', TeamMemberView.as_view(), name='team_view')
]
