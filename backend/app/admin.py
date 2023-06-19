from django.contrib import admin

from . models import Skill, Certificate

# Register your models here.
class SkillAdmin(admin.ModelAdmin):
    fieldsets = [
        ("Skill Name", {"fields": ["skill_name"]}),
        ("Skill Level", {"fields": ["skill_level"]}),
        ("Date published", {"fields": ["pub_date"]}),
        ("Last updated", {"fields": ["last_updated"]}),
    ]
    list_display = ["skill_name", "skill_level"]

class CertificateAdmin(admin.ModelAdmin):
    fieldsets = [
        ("Certificate Name", {"fields": ["certificate_name"]}),
        ("Certificate Origin", {"fields": ["certificate_origin"]}),
        ("Date Issued", {"fields": ["certificate_issued"]}),
    ]
    list_display = ["certificate_name", "certificate_origin", "certificate_issued"]

admin.site.register(Skill, SkillAdmin)
admin.site.register(Certificate, CertificateAdmin)