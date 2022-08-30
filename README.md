# Timestamp Microservice

This is a Node.js (with Express.js) small app which is part of the FCC Back End Certification. 
It listens GET requests with a date string in and sends back a JSON with Unix value and natural format for the given date.
If request is empty it sends back current timestamp.

## Example usage

```
https://project-timestamp.iotardis.repl.co/api/2022-09-10
https://project-timestamp.iotardis.repl.co/api/1661849116558
https://project-timestamp.iotardis.repl.co/api/
```

## Example output

```
{"unix":1661849116558,"utc":"Tue, 30 Aug 2022 08:45:16 GMT"}
```

## [Try it](https://project-timestamp.iotardis.repl.co)
