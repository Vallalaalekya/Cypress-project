feature: Login

Scenario Outline: validate login for multiple users
Given open the browser and enter the url
When enter username as <username>
And enter  password as <password>
Then Login should be successful

Example: 
    |username| password |
    |ADmin   | Admin123 |
    |admin   | passs    |
    |Admin   | admin123 |
    |admin   | Admin123 |
