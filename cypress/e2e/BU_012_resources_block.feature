Feature: BU_012_resources_block

Background:
Given I want to navigate to telnyx.com and close cookies pop-up window
Given I navigate to the SIP Trunks page
When I am on the SIP Trunks page


Scenario Outline: I want to verify PYTHON tab
When Description PYTHON block:
"""
import telnyx
telnyx.api_key = "YOUR_API_KEY"

telnyx.CredentialConnection.create(
  user_name="MyUser",
  password="my123secure456password789",
  connection_name="New Credential Connection"
)
"""
Then Verify PYTHON tab
| number_i | language | description_i |
|    2     | PYTHON   |       3       |

Then Verify resources description PYTHON block "<description_i>"
Examples:
| description_i |
|       3       |


Scenario Outline: I want to verify RUBY tab
When Description RUBY block:
"""
require "telnyx"
Telnyx.api_key = "YOUR_API_KEY"

Telnyx::CredentialConnection.create(
  connection_name:"Test Connection",
  user_name: "MyUser",
  password:"my123secure456password789"
)
"""

Then Verify RUBY tab
| number_i | language | description_i |
|    3     | RUBY     |       4       | 

Then Verify resources description RUBY block "<description_i>"
Examples: 
| description_i |
|       4       |  


Scenario Outline: I want to verify NODE tab
When Description NODE block:
"""
const telnyx = require('telnyx')('YOUR_API_KEY');
// In Node 10
const { data: credentialConnection } = await telnyx.credentialConnections.create({
  connection_name: "My connection name",
  user_name: "MyUser",
  password: "my123secure456password789"
});
""" 
Then Verify NODE tab
| number_i | language | description_i |    
|    4     | NODE     |       5       |

Then Verify resources description NODE block "<description_i>"
Examples:
| description_i |    
|       5       |
 

Scenario Outline: I want to verify PHP tab
When Description PHP block:
"""
\Telnyx\Telnyx::setApiKey('YOUR_API_KEY');

\Telnyx\CredentialConnection::Create([
  "connection_name" => "my name",
  "user_name" => "MyUser",
  "password" => "my123secure456password789"
]);
""" 
Then Verify PHP tab
| number_i | language | description_i |
|    5     | PHP      |       6       | 

Then Verify resources description PHP block "<description_i>"
Examples:
| description_i |
|       6       |  


Scenario Outline: I want to verify .NET tab
When Description .NET block:
"""
TelnyxConfiguration.SetApiKey('YOUR_API_KEY');
var service = new CredentialConnectionService();
var createOptions = new UpsertCredentialConnectionOptions()
{
    SipUriCallingPreference = "disabled",
    UserName = "user001",
    Outbound = null,
    Password = "pwd001",
    ConnectionName = "name"
};
var response = service.CreateCredentialConnection(createOptions);
""" 
Then Verify .NET tab
| number_i | language | description_i |
|    6     | .NET     |       7       |

Then Verify resources description .NET block "<description_i>"
Examples:
| description_i |
|       7       |
  

Scenario Outline: I want to verify CURL tab
When Description CURL block:
"""
curl -X POST \
  --header "Content-Type: application/json" \
  --header "Accept: application/json" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --data '{"connection_name": "Test Connection", "user_name": "MyUser", "password":"my123secure456password789"}' \
  https://api.telnyx.com/v2/credential_connections
""" 
Then Verify CURL tab
| number_i | language | description_i |    
|    1     | CURL     |       2       |     

Then Verify resources description cURL block "<description_i>" 
Examples:
| description_i |    
|       2       |
 