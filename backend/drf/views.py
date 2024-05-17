# Django REST framework를 사용하여 API 뷰를 생성할 수 있음. 필요하다면 pip install djangorestframework로 설치

# from rest_framework import viewsets
# from .models import Event
# from .serializers import EventSerializer

# fetch_cultural_events의 경우 requests 라이브러리를 사용하여 외부 API로부터 데이터를 가져옴
from django.http import JsonResponse
import requests


# class EventViewSet(viewsets.ModelViewSet):
#     queryset = Event.objects.all()
#     serializer_class = EventSerializer

def fetch_cultural_events(request):
    url = "http://www.culture.go.kr/openapi/rest/publicperformancedisplays/area?ServiceKey=XAQRkAc4BBj5RWTWfdEX5Oc5ry0o4j74tmxD5R4HhJoegNLrNTlRZl6%2BCW%2BX%2BC28DAwBYq73UvcNcdB6n591bg%3D%3D&amp;cPage=1&amp;rows=999"
    response = requests.get(url)
    try:
        data = response.json()
        return JsonResponse(data)
    except ValueError as e:
        print("Response Content:", response.content)  # 응답 내용 출력
        raise ValueError("Unable to decode JSON.") from e
    
    