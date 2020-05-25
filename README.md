```bash
# Start the docker daemon
sudo systemctl start docker

# Build the image
docker build -t scraper:latest .

# Run container
docker run --rm --env DISPLAY=unix$DISPLAY -v $XAUTH:/root/.Xauthority -v /tmp/.X11-unix:/tmp/.X11-unix -v `pwd`:/app -it scraper:latest bash
```
