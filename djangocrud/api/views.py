from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .serializer import UserSerializer, MonitoringSerializer
from .models import Monitoring


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)


class MonitoringViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Monitoring.objects.all()
    serializer_class = MonitoringSerializer

    def list(self, request, *args, **kwargs):
        monitoring = Monitoring.objects.all()
        serializer = MonitoringSerializer(monitoring, many=True)
        return Response(serializer.data)