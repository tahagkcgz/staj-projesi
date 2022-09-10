from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import TeamMember

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["username", "email", "password", "password2"]
        extra_kwargs = {
            "password": {"write_only": True, "style": {"input_type": "password"}},
            "password2": {"style": {"input_type": "password"}},
        }

    def create(self, validated_data):
        validated_data.pop("password2")
        return User.objects.create_user(**validated_data)


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = ['id', 'name', 'position']
