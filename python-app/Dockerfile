#Base Image
FROM python:3.10-slim

#Set working directory in container
WORKDIR /app

#Copy code from host machine to container
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

#Expose Port
EXPOSE 5000

#Run the app
CMD ["python","app.py"]

