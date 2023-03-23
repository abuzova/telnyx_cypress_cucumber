Given Table:
| number_i | language | description_i |    
|    1     | CURL     |       2       |     
|    2     | PYTHON   |       3       |
|    3     | RUBY     |       4       | 
|    4     | NODE     |       5       | 
|    5     | PHP      |       6       | 
|    6     | .NET     |       7       |


Scenario Outline: I want to verify resources block work on the 
When I am on the SIP Trunks pageooo
Then Verify resources block work cURLyyyyyyy
 """
  cURL
  ===============
  curl -X POST \
  --header "Content-Type: application/json" \
  --header "Accept: application/json" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --data '{"connection_name": "Test Connection", "user_name": "MyUser", "password":"my123secure456password789"}' \
  https://api.telnyx.com/v2/credential_connections
  """
Then Verify resources block work cURLiipp
  """
  cURLii
  ===============
  curl -X POST \
  --header "Content-Type: application/json" \
  --header "Accept: application/json" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --data '{"connection_name": "Test Connection", "user_name": "MyUser", "password":"my123secure456password789"}' \
  https://api.telnyx.com/v2/credential_connections
  """
  """
  cURL3
  ===============
  curl -X POST \
  --header "Content-Type: application/json" \
  --header "Accept: application/json" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --data '{"connection_name": "Test Connection", "user_name": "MyUser", "password":"my123secure456password789"}' \
  https://api.telnyx.com/v2/credential_connections
  """
  """
  cURL4
  ===============
  curl -X POST \
  --header "Content-Type: application/json" \
  --header "Accept: application/json" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --data '{"connection_name": "Test Connection", "user_name": "MyUser", "password":"my123secure456password789"}' \
  https://api.telnyx.com/v2/credential_connections
  """