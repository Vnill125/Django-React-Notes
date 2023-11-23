from django.db import models  

# Create your models here.

class Notes(models.Model):
    id = models.AutoField(primary_key=True)
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.body[0:50]
