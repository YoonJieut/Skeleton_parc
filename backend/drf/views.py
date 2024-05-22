# Django REST framework를 사용하여 API 뷰를 생성할 수 있음. 필요하다면 pip install djangorestframework로 설치

# fetch_cultural_events의 경우 requests 라이브러리를 사용하여 외부 API로부터 데이터를 가져옴

# 경로: backend/drf/views.py

import requests
import logging
from django.http import JsonResponse

# 로깅 설정
logger = logging.getLogger(__name__)

def fetch_cultural_events(request):
    
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get('http://www.culture.go.kr/openapi/rest/publicperformancedisplays/area', headers=headers, params={
            'ServiceKey': '암호대체ㅁㄴㅇㅁㄴㅇㅁㄴㅇ',
            'cPage': '1',
            'rows': '999'
        })
        response.raise_for_status()  # HTTP 오류가 발생할 경우 예외 발생
        data = response.json()  # JSON 디코딩 시도
    except ValueError as e:
        logger.error(f'JSON 디코딩 오류: {e}')
        logger.error(f'응답 내용: {response.text}')
        return JsonResponse({'error': 'Unable to decode JSON'}, status=400)
    except requests.RequestException as e:
        logger.error(f'API 요청 오류: {e}')
        return JsonResponse({'error': str(e)}, status=response.status_code)
    
    return JsonResponse(data, safe=False)
