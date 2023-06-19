from django.db import models
from django.utils import timezone

# Create your models here.
class Skill(models.Model):
    time = timezone.now()
    BEGINNER = "Beginner"
    ADVANCED_BEGINNER = "Advanced Beginner"
    INTERMEDIATE = "Intermediate"
    ADVANCED = "Advanced"
    EXPERT = "Expert"
    SKILL_LEVEL_CHOICES = [
        (BEGINNER, "Beginner"),
        (ADVANCED_BEGINNER, "Advanced Beginner"),
        (INTERMEDIATE, "Intermediate"),
        (ADVANCED, "Advanced"),
        (EXPERT, "EXPERT"),
    ]
    skill_name = models.CharField(max_length=100)
    skill_level = models.CharField(
        max_length=20,
        choices=SKILL_LEVEL_CHOICES,
        default=BEGINNER,
    )
    pub_date = models.DateTimeField("date published")
    last_updated = models.DateTimeField("last updated")

    def __str__(self):
        return self.skill_name


class Certificate(models.Model):

    certificate_name = models.CharField(max_length=200)
    certificate_origin = models.CharField(max_length=200)
    certificate_issued = models.DateField("Date issued")

    def __str__(self) -> str:
        return self.certificate_name