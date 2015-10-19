# rpi-node-example-hello-world

A 10-minutes example on how to get a simple Node.js app up and running.
In the end, you can point your Browser to the IP of your Pi and see a running webserver!

Based on: https://docs.docker.com/examples/nodejs_web_app/

## How to use in 3 steps
### Step 1: Build the image

On your Raspberry Pi you can clone this example with

```bash
$ git clone https://github.com/hypriot/rpi-node-example-hello-world.git
$ cd rpi-node-example-hello-world
```

Then build the Docker image with

```bash
$ docker build -t node-hello .
```

### Step 2: Run the container

Now run the container with

```bash
$ docker run -p 80:80 -d node-hello
```

### Step 3: Test it

On your computer open a web browser and type `http://localhost:80` or use `curl` to connect to your the hello world container on the Pi.

```bash
curl http://ip-of-your-raspberry-pi
```

## License

The MIT License (MIT)

Copyright (c) 2015 Hypriot

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
