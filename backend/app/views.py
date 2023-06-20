from rest_framework.views import APIView
from rest_framework.response import Response
from . models import Skill, Certificate

# Create your views here.
class SkillsView(APIView):

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
        return Response(output)


class CertificatesView(APIView):

    def get(self, request):
        output = [
            {
                "certificate_name": output.certificate_name,
                "certificate_origin": output.certificate_origin,
                "certificate_issued": output.certificate_issued.strftime("%m/%Y"),
            }
            for output in Certificate.objects.all()
        ]
        return Response(output)