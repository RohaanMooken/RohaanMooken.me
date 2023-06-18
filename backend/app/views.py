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
                "pub_date": output.pub_date.strftime("%d/%m/%Y %H:%M:%S"),
                "last_updated": output.last_updated.strftime("%d/%m/%Y %H:%M:%S"),
            }
            for output in Skill.objects.all()
        ]
        print(output)
        return Response(output)