FROM hypriot/rpi-iojs:1.4.1
MAINTAINER Mathias Renner <mathias@hypriot.com>

# Adding source files into container
ADD src/ /src

# Install app dependencies
RUN cd /src; npm install

# Open Port 80
EXPOSE 80

# Run Node.js
CMD ["node", "/src/index.js"]
