from django.db import models


class TeamMember(models.Model):

    name = models.CharField(max_length=250)
    position = models.CharField(max_length=250)
    id = models.CharField(max_length=250, primary_key=True)

    def __str__(self):
        return self.name
