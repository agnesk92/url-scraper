FROM python:3.8.3-slim-buster
LABEL author="Agnes Kis"

# For x11
RUN apt-get update && apt-get upgrade -y && apt-get install -qqy x11-apps

RUN mkdir /app
WORKDIR /app
