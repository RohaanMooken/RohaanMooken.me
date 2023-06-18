from django.shortcuts import render
from django.forms.models import model_to_dict
from django.utils import timezone
from rest_framework.views import APIView
from rest_framework.response import Response
from . models import Skill
from .serializer import ReactSerializer

# Create your views here.
class ReactView(APIView):
    
    serializer_class = ReactSerializer

    def get(self, request):
        output = [
            {
                "skill_name": output.skill_name,
                "skill_level": output.skill_level,
                "pub_date": output.pub_date,
                "last_updated": output.last_updated
            }
            for output in Skill.objects.all()
        ]
        return Response(output)
    
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)