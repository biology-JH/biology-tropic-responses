import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const publicRoot = join(root, 'public');
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml'};
const server=createServer(async (req,res)=>{
  try {
    const url=new URL(req.url,'http://localhost');
    const requested=decodeURIComponent(url.pathname);
    const relative=requested.replace(/^\/+/, '');
    const base=(relative.startsWith('assets/')||relative==='manus-routes.json')?publicRoot:root;
    const candidate=normalize(join(base,relative||'index.html'));
    if(!candidate.startsWith(root)){res.writeHead(403);res.end('Forbidden');return}
    let file=candidate;
    try{const info=await stat(file);if(info.isDirectory())file=join(file,'index.html')}catch{file=join(root,'index.html')}
    const body=await readFile(file);
    res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(body);
  }catch(error){res.writeHead(500,{'Content-Type':'text/plain'});res.end('Server error');console.error(error)}
});
const port=Number(process.env.PORT||3000);server.listen(port,'0.0.0.0',()=>console.log(`Tropic Responses listening on ${port}`));
