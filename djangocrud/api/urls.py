from django.urls import include, path
from rest_framework import routers
from api import views
from rest_framework.authtoken.views import ObtainAuthToken

router = routers.DefaultRouter()
router.register(r'monitoring', views.MonitoringViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', ObtainAuthToken.as_view()),
]
