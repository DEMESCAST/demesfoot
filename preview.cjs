const http = require('http');
const fs = require('fs');
const path = require('path');
const DIST = path.join(__dirname, 'dist');
const PORT = 4173;
const mime = {'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.svg':'image/svg+xml'};
http.createServer((q,r) => {
  let u = q.url.split('?')[0];
  if (u === '/' || u === '/demesfoot/' || u === '/demesfoot') u = '/demesfoot/index.html';
  const fp = path.join(DIST, u.replace('/demesfoot/',''));
  const ct = mime[path.extname(fp)] || 'text/plain';
  fs.readFile(fp, (e,d) => { if(e){r.writeHead(404);r.end('404')}else{r.writeHead(200,{'Content-Type':ct});r.end(d)} });
}).listen(PORT, () => console.log(`Preview: http://localhost:${PORT}/demesfoot/`));
