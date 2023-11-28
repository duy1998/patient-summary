docker build -t patient-summary .

docker run -p 3001:3000 -d patient-summary