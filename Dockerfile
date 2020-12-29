ARG BUILD_FROM
FROM $BUILD_FROM

ENV LANG C.UTF-8

# Upgrade existing packages in the base image
RUN apk --no-cache upgrade

# Install apache from packages with out caching install files
RUN apk add --no-cache apache2
	
# Open port for httpd access
EXPOSE 8199
	
# Copy data for add-on
COPY run.sh /
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]
