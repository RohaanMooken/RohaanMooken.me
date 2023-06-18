from django.contrib import admin

from . models import Skill

# Register your models here.
class SkillAdmin(admin.ModelAdmin):
    fieldsets = [
        ("Skill Name", {"fields": ["skill_name"]}),
        ("Skill Level", {"fields": ["skill_level"]}),
        ("Date published", {"fields": ["pub_date"]}),
        ("Last updated", {"fields": ["last_updated"]}),
    ]
    list_display = ["skill_name", "skill_level"]

admin.site.register(Skill, SkillAdmin)