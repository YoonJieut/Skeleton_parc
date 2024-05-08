# app.py

# FastAPI
from fastapi import FastAPI

# FastAPI 애플리케이션 생성
app = FastAPI()

@app.get("/")
def read_root():
    return {"Greet": "Hello, FastAPI!"}

# FastAPI 서버 실행
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
    
