```bash
# Start the docker daemon
sudo systemctl start docker

# Build the image
docker build -t scraper:latest .

# Run container
docker run --rm --env DISPLAY=unix$DISPLAY -v $XAUTH:/root/.Xauthority -v /tmp/.X11-unix:/tmp/.X11-unix -v `pwd`:/app -it scraper:latest bash
```

## Refs

Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
