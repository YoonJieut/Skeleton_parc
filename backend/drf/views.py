# Django REST framework를 사용하여 API 뷰를 생성할 수 있음. 필요하다면 pip install djangorestframework로 설치

# from rest_framework import viewsets
# from .models import Event
# from .serializers import EventSerializer

# fetch_cultural_events의 경우 requests 라이브러리를 사용하여 외부 API로부터 데이터를 가져옴
import requests
from django.http import JsonResponse


# class EventViewSet(viewsets.ModelViewSet):
#     queryset = Event.objects.all()
#     serializer_class = EventSerializer

    
def fetch_cultural_events(request):
    try:
        response = requests.get('http://www.culture.go.kr/openapi/rest/publicperformancedisplays/area?ServiceKey=XAQRkAc4BBj5RWTWfdEX5Oc5ry0o4j74tmxD5R4HhJoegNLrNTlRZl6%2BCW%2BX%2BC28DAwBYq73UvcNcdB6n591bg%3D%3D&amp;cPage=1&amp;rows=999')
        response.raise_for_status()  # HTTP 오류가 발생할 경우 예외 발생
        data = response.json()  # 여기서 JSON 디코딩 시도
    except ValueError as e:
        return JsonResponse({'error': 'Unable to decode JSON'}, status=400)
    except requests.RequestException as e:
        return JsonResponse({'error': str(e)}, status=response.status_code)
    
    return JsonResponse(data, safe=False)