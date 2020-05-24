FROM python:3.8.3-slim-buster

MAINTAINER Agnes Kis

RUN mkdir /app
WORKDIR /app
COPY ./requirements.txt /app

RUN pip install -r requirements.txt
