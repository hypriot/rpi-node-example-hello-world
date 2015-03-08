# Node.js Hello World example for the Raspberry Pi

A 10-minutes example on how to get a simple Node.js app up and running.
In the end, you can point your Browser to the IP of your Pi and see a running webserver!

How to use: <Link to blog series>

Based on: https://docs.docker.com/examples/nodejs_web_app/

## Building the image

On your Raspberry Pi you can clone this example with

```bash
$ git clone https://github.com/hypriot/rpi-node-example-hello-world.git
$ cd rpi-node-example-hello-world
```

Then build the Docker image with

```bash
$ docker build -t node-hello .
```

## Running the example

Now run the example web server with

```bash
$ docker run -p 80:80 -d node-hello
```

## Test it

On your computer open a web browser or use `curl` to connect to your Raspberry Pi running the hello world container.

```bash
open http://ip-of-your-raspberry-pi
curl http://ip-of-your-raspberry-pi
```

## Run a loadbalancer

Now we run two instances of the Node.js hello world example behind a haproxy
that will do load balancing.

## Install docker-compose

```bash
curl -L https://github.com/hypriot/compose/releases/download/1.1.0-raspbian/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

## Run the balanced app

```bash
docker-compose up
```

## Test it

On your computer open a web browser or use `curl` to connect to your Raspberry Pi running the load balanced hello world containers.

```bash
open http://ip-of-your-raspberry-pi
curl http://ip-of-your-raspberry-pi
```

Locally you can check the stats of haproxy with

```bash
curl http://localhost:70
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
