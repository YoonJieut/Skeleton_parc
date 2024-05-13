# Django REST framework를 사용하여 API 뷰를 생성할 수 있음. 필요하다면 pip install djangorestframework로 설치

from rest_framework import viewsets
from .models import Event
from .serializers import EventSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer