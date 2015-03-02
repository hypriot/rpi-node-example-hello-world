FROM hypriot/rpi-iojs:1.4.1
MAINTAINER Mathias Renner <mathias@hypriot.com>

# Define working directory
WORKDIR /src

# Adding source files into container
ADD . /src

# Install app dependencies
RUN npm install

# Open Port 80
EXPOSE 80

# Run Node.js
CMD ["node", "index.js"]
