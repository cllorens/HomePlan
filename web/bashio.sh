#!/usr/bin/env bashio

USERNAME=$(bashio::config 'username')
MQTT_HOST=$(bashio::services mqtt "host")
MQTT_USER=$(bashio::services mqtt "username")
MQTT_PASSWORD=$(bashio::services mqtt "password")

bashio::log.info "${MQTT_USER}"
