# Spring boot Authorization server

#### Credits

[Spring boot official web-site for Authorization server](https://docs.spring.io/spring-authorization-server/reference/getting-started.html)

## About the demo

In this application we can see that how authorization server configured.<br><br> 
We have two steps to complete this demo.

#### In Memory

To checkout in memory demo we have a tag: <br>

[In memory git Tag](https://github.com/pervez8ktt/SpringAuthorizationServer/releases/tag/in_mamory_authorization)


## With Data base

#### Client credentials

```curl
curl --location 'http://localhost:9000/oauth2/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Authorization: Basic cmVnaXN0cmFyLWNsaWVudDpzZWNyZXQ=' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'scope=client.create client.read' \
--data-urlencode 'client_id=registrar-client' \
--data-urlencode 'client_secret=secret'

```

Into Authorization key, we need to send client_id:secret key<br><br>

We have defined above client id and secret key into [IntializationServer](src/main/java/com/knitkota/javademo/authserver/authpack/services/InitializationService.java)<br><br>

