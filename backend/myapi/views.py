from rest_framework import generics, permissions, viewsets, response
from rest_framework_simplejwt import authentication
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseRedirect
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


class TeamMemberView(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all().order_by('id')
    serializer_class = TeamMemberSerializer


@csrf_exempt
def team_refresh(request):
    i = 1
    team = TeamMember.objects.all()
    for member in team:
        member.id = i
        i = i + 1
        member.save()
    reverse_query = TeamMember.objects.order_by('-pk')
    if reverse_query[0].name == reverse_query[1].name:
        reverse_query[0].delete()
    team.all()
    return HttpResponseRedirect('http://localhost:8080/admin')
