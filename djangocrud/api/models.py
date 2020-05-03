from django.db import models
#from djongo import models

class Monitoring(models.Model):
    date = models.CharField(max_length=255)
    energy = models.DecimalField(max_digits=6, decimal_places=3)
    reactive_energy = models.DecimalField(max_digits=6, decimal_places=3)
    power = models.DecimalField(max_digits=6, decimal_places=3)
    maximeter = models.DecimalField(max_digits=6, decimal_places=3)
    reactive_power = models.DecimalField(max_digits=6, decimal_places=3)
    voltage = models.DecimalField(max_digits=6, decimal_places=3)
    intensity = models.DecimalField(max_digits=6, decimal_places=3)
    power_factor = models.DecimalField(max_digits=6, decimal_places=3)

