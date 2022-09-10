from rest_framework.response import Response
from rest_framework import generics, permissions
from rest_framework_simplejwt import authentication
from django.contrib.auth import get_user_model
from .models import TeamMember
from .serializers import TeamMemberSerializer, UserSerializer

User = get_user_model()


class UserCreate(generics.CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class UserDetail(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (authentication.JWTAuthentication,)

    def get_object(self):
        return self.request.user


class TeamMemberView(generics.RetrieveAPIView):
    queryset = TeamMember.objects.all()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = TeamMemberSerializer(queryset, many=True)
        return Response(serializer.data)
