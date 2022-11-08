from pydantic import BaseModel
from typing import Optional

class SuccessResponse(BaseModel):
    ''' Return message for successful activity '''
    message: str = 'Success'
    code: str = '00'
    data: Optional[dict]

class ErrorResponse(BaseModel):
    ''' Return message for unsuccessful activity '''
    message: str = 'Error'
    code: str = 'E00'

class SocialMediaParam(BaseModel):
    facebook: Optional[str] = "#"
    instagram: Optional[str] = "#"
    twitter: Optional[str] = "#"
    tiktok: Optional[str] = "#"

    class Config:
        orm_mode = True