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


#### Authorization Code

To implement authorization code, first we need to provide /oauth2/authorize then get the access token

##### Step 1

Create a get type url as below:

```code

url: http://localhost:9000/oauth2/authorize

method: GET

QUERY Params:

response_type:code
client_id:application-client
state:fjkwja
scope:openid profile
redirect_uri:http://127.0.0.1:8080/login/oauth2/code/oidc-client

```

The CURL for above:

```curl

curl --location 'http://localhost:9000/oauth2/authorize?response_type=code&client_id=application-client&state=fjkwja&scope=openid%20profile&redirect_uri=http%3A%2F%2F127.0.0.1%3A8080%2Flogin%2Foauth2%2Fcode%2Foidc-client' \

```

When we open above url in browser, identity server will ask for user credentials. Into this you need to pass<br>

username: user <br>
password: password

when authentication done, identity server will redirect to provided redirect_url with code and state request param<br>

with the help of state, we can confirm csrf attack and code is used to get the access token <br><br>

To get access token:

```curl

URL: http://localhost:9000/oauth2/token

Headers:
	'Content-Type: application/x-www-form-urlencoded'
	'Authorization: Basic cmVnaXN0cmFyLWNsaWVudDpzZWNyZXQ='

grant_type:authorization_code
code:<received_at_redirect_url>
redirect_uri:https://oauth.pstmn.io/v1/callback
client_id: application-client
client_secret: secret

