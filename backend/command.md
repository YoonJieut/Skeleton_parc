# flask

```
// venv 생성 방법
python -m venv 나의환경이름

// 접근 방법 (역슬레시를 사용)
나의가상환경\Scripts\activate
// 가상환경 끊기
deactivate

//npm과 같은 pip
pip install flask
// 핍 얼려꺽 : 의존 정보을 추출하여 저장한다.
pip freeze > requirements.txt
// 설치하는 방법
pip install -r requirements.txt

// 실행
python app.py
```

# FastAPI

```
// venv 생성 방법
python -m venv 나의환경이름

// 접근 방법 (역슬레시를 사용)
나의가상환경\Scripts\activate
// 가상환경 끊기
deactivate

//npm과 같은 pip
pip install flask
// 핍 얼려꺽 : 의존 정보을 추출하여 저장한다.
pip freeze > requirements.txt
// 설치하는 방법
pip install -r requirements.txt

// fastapi 설치
pip install fastapi

// 실행
// --reload는 서버를 자동으로 재부팅해준다.
uvicorn {app 서버 파일 이름}:app --reload

// 디버깅 기능까지 제공하는 fastapi (swagger)
~~서버/docs
```
