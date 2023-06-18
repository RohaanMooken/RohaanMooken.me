from rest_framework import serializers
from . models import Skill

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['skill_name', 'skill_level', 'pub_date', 'last_updated']