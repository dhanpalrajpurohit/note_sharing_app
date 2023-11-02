#FROM python:3.9
#ENV PYTHONUNBUFFERED=1
#ENV PYTHONUNBUFFERED=1
#WORKDIR /app
#COPY requirements.txt requirements.txt
#RUN pip install --upgrade pip
#RUN pip install -r requirements.txt
#COPY ./src/ /app/
#EXPOSE 8000
#CMD ["python", "main.py"]
#CMD ["alembic", "init", "alembic"]

FROM python:3.9
ENV PYTHONUNBUFFERED=1
# RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev
ENV PYTHONUNBUFFERED=1
WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt
COPY ./src/ /app
CMD ["uvicorn", "main:app", "--host=0.0.0.0", "--reload"]
