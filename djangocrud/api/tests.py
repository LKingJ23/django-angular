from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Monitoring

# Create your tests here.
class MonitoringTests(APITestCase):
    def test_create_monitoring(self):
        """
        Ensure we can create a new account object.
        """
        url = reverse('monitoring-list')
        data = {
            'date': '0',
            'energy': 0,
            'reactive_energy': 0,
            'power': 0,
            'maximeter': 0,
            'reactive_power': 0,
            'voltage': 0,
            'intensity': 0,
            'power_factor': 0
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Monitoring.objects.count(), 1)
        self.assertEqual(Monitoring.objects.get().date, '0')
        self.assertEqual(Monitoring.objects.get().energy, 0)
        self.assertEqual(Monitoring.objects.get().reactive_energy, 0)
        self.assertEqual(Monitoring.objects.get().power, 0)
        self.assertEqual(Monitoring.objects.get().maximeter, 0)
        self.assertEqual(Monitoring.objects.get().reactive_power, 0)
        self.assertEqual(Monitoring.objects.get().voltage, 0)
        self.assertEqual(Monitoring.objects.get().intensity, 0)
        self.assertEqual(Monitoring.objects.get().power_factor, 0)
