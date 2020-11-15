/* Get Session Codes
This code get Sip uname & Sip pass and Session code from https://www.textnow.com/messaging
*/
var sip;
fetch("https://www.textnow.com/api/v3/sip").then((response) => {
  return response.json()})
  .then((data) => {
     sip =data;
     sesurl = "https://www.textnow.com/api/"+sessionUsername+"/session"
     response = fetch(sesurl,{credentials: 'include'}).then((response) => {
    return response.json();
  })
  .then((data) => {
      u = sip.tncp.credentials.username;
      p = sip.tncp.credentials.password;
      s = data.id;
      document.write(btoa(u+"."+p+"."+s))
      
  });

  });
