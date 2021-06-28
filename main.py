from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi_jwt_auth import AuthJWT
from fastapi_jwt_auth.exceptions import AuthJWTException
from pydantic import BaseModel

from fastapi import FastAPI, Body, Depends

#from app.model import PostSchema, UserSchema, UserLoginSchema
from core.auth_bearer import JWTBearer
from core.handler import signJWT


from core import  models
from core.database import engine
from core.routers import contact, user, authentication

app = FastAPI(
    title = "TEST API FOR JOB",
    description= "Api for Job",
    version = "1.0",
    redoc_url = "/",
#    docs_url = None,
)

class Settings(BaseModel):
    authjwt_secret_key: str = "secret"

@AuthJWT.load_config
def get_config():
    return Settings()

@app.exception_handler(AuthJWTException)
def authjwt_exception_handler(request: Request, exc: AuthJWTException):
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.message}
    )

models.Base.metadata.create_all(engine)

app.include_router(authentication.router)
app.include_router(contact.router)
app.include_router(user.router)
