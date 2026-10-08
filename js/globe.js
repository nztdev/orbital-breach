// globe.js: realistic Earth. NASA textures from the three.js examples via jsDelivr; generated globe as offline fallback.
const T3=THREE;
const LAND=[[-168,66,-162,70,-156,71.5,-141,70,-128,70,-115,68,-100,68,-95,72,-85,69,-82,66,-90,64,-93,60,-94,58,-88,56,-82,55,-79,52,-78,58,-77,62,-70,61,-65,60,-62,57,-56,52,-60,48,-65,48,-66,44,-70,43,-70,41.5,-74,40.5,-76,37,-76,35,-81,31,-80,26,-81,25.2,-83,29,-85,30,-89,30,-94,29.5,-97,27,-97.5,22,-95,18.5,-91,18.5,-90,21,-87,21.5,-88,16,-84,15.5,-83,11,-79.5,9.5,-77.5,8.5,-80,7.5,-83,8.2,-86,11,-88,13,-92,14.5,-96,15.7,-101,17.5,-105.5,20,-105.5,23,-109,26,-112.5,30,-114.8,31.8,-117,32.5,-120.5,34.5,-122.5,37.5,-124,40.5,-124.5,43,-124,47,-123,48.5,-127,50.5,-130,54.5,-134,58,-140,59.8,-146,60.5,-152,59,-158,56.5,-164,54.8,-160,58.5,-165,61,-166,64],
[-77.5,8.5,-72,12,-67,10.7,-62,10.5,-60,8,-57,6,-52,5,-50,.5,-48,-1,-44,-2.5,-39,-3.5,-35,-5.5,-35,-9,-38,-13,-39,-18,-41,-22,-45,-23.5,-48.5,-26,-49,-29,-52,-33,-55,-35,-57,-37.5,-62,-39,-65,-41,-65,-45,-67.5,-46.5,-66,-48,-69,-51.5,-68.5,-54,-72,-54,-74,-50,-75.5,-46,-73.5,-42,-73.5,-37,-71.5,-32,-71.5,-27,-70,-18.5,-76,-14,-79,-8,-81,-5,-80,-2,-80.5,.5,-78.5,2,-77.5,6],
[-9,37,-9,43,-1.5,43.5,-4.5,48,-1.5,49.5,2,51,4,53,8.5,54,8.5,57,10.5,57.5,10.5,55,12,54.3,14,54,19,54.5,21,57,24,57.5,24,59.5,29,60,23,60,21.5,61,21.5,64,25,65.5,21,65,17.5,62.5,18.5,60,16.5,57,14,55.5,12.5,56,11,59,8,58,5,59.5,5,62,10,64,14,67.5,19,70,26,71,31,70,41,67,33,66,40,65,44,66.5,54,68.5,60,69,68,69,73,72.5,80,73,87,75,100,77,112,74,125,73,140,72.5,150,71.5,160,70,170,70,180,68.5,180,64.5,174,62,164,59.8,162,56,156.5,51,155.5,56.5,150,59.5,142.5,59,135,54.5,141,53,140,48,135,43,131,42.5,129.5,40.5,128,38.5,129.5,35.5,126.5,34.5,126.5,37.5,125,39.5,121.5,39,122,40.5,118,39,119,37,122.5,37,120,35,121.5,32,122,30,120,26,117,23.5,113.5,22,110,21,108,21.5,106.5,19,109,15,109,11.5,105,8.7,105,10.5,103,10.5,100.5,13.3,100,9,102,6,103.5,4.5,104,1.5,103,1.3,101,3,98.5,8,98.3,12,97.5,16.5,94.5,16.2,94,19.5,92,21.5,90,22,87,21.5,86.5,19.8,84,18,80.5,15.5,80,13,79.5,10,78,8.4,76.5,9,75,12.5,73,17.5,72.7,21,70,21,68.5,23.5,66.5,25.3,61.5,25.2,57,25.7,56.5,27,54,26.8,51,28,49,30,48,29.5,50,26,51.5,24.5,54,24,56.5,24.5,56.5,26,58.5,23.5,59.5,22.5,57,19,55,17,52,16,48,14,45,12.8,43.3,12.7,42.5,16,39,21.5,35,28,34.5,29.5,32.5,30,34.8,32,35.8,35.5,36,36.8,32,36.2,28,36.8,26.5,38.5,26.5,40,29,41,27.5,41,26,40,23.5,40,24,38,22,36.5,21,38.5,19.5,40.5,18.5,40,16.5,39,16,38,15.7,40,12,42,10,44,8,44,6,43,3,43.3,3,41.8,.5,40,-.5,38.5,-2,36.8,-5.5,36],
[-5.5,36,-2,35,3,36.8,10,37.2,11,33.5,15,32.3,20,31,20,32.8,25,32,30,31.3,32.5,31.2,34.5,29.5,33,28,35.5,24,37.3,19,39,15.5,41.5,13,43,11.7,46,10.5,51,12,51,10.5,48,6,44,1.5,41,-2,39.5,-5,39,-8,40.5,-11,40.5,-15,37,-18,35,-22,33,-25.5,32.7,-28.5,30,-31.5,27,-33.5,22,-34.2,18.5,-34.2,17.5,-30,15,-26,14,-22,12,-17,13.5,-12,12.5,-6,9,-1,9.5,3.5,6,4.3,4,6.3,-1,5,-4.5,5.2,-8,4.5,-11,6.8,-13.5,9.5,-17,14,-17,21,-14.5,25,-10,29.5,-9.5,32,-6.5,34],
[-5.5,50,1.5,51,1.7,52.8,-.5,54,-2,56,-2,57.6,-4,58.5,-5.5,58.5,-5.5,56,-4.7,54.8,-3,54,-3,53.3,-4.5,53,-5,51.8,-3.5,51.3],[-10,52,-6,52.2,-6,54.2,-8,55.2,-10,54],[-24,65.5,-18,66.5,-14,65,-18,63.5,-22.5,64],
[-73,78,-60,82,-30,83.5,-20,81,-18,76,-22,70,-32,68,-43,60,-48,61,-53,66,-55,70,-62,76],[49.5,-12,50.5,-15.5,47,-25,44,-24,43.5,-21,44.5,-16,47,-14.5],
[113.5,-22,114,-26,115,-33.5,118,-35,123.5,-34,129,-31.5,131.5,-31.5,135.5,-34.5,138,-35,140,-38,146,-39,150,-37.5,153,-31,153.5,-26,149,-20.5,146,-18.5,145.5,-15,143.5,-14,142.5,-10.8,141.5,-13,140.5,-17.5,137,-15.5,135.5,-12,131,-11.5,129,-14.5,126,-14,122,-17.5,121,-19.5,116,-20.5],
[173,-35,178.5,-37.5,175.5,-41.5,174.5,-40,173.5,-38.5],[172.5,-40.5,174.5,-41.5,171,-44.5,169,-46.5,166.5,-46,168,-44,171.5,-41.5],
[130.8,31,132,33.8,135.5,33.5,137,34.5,139.5,35,141,38,142,40,141.5,41.5,140,40,139.5,38,137,37,135.5,35.8,133,35.5,131,34.5],[140,42,142,45.5,145,43.5,143,42.2],
[95.3,5.5,98,4,104,-1,106,-3,105.8,-5.8,102,-4,99,-1,95.5,3],[109,1.5,111,1.5,117,7,119,5,118,1,116,-3.8,114,-4,110.5,-3,109,-1],[105.3,-6.5,108,-6.5,111,-6.5,114.5,-7.8,114,-8.7,108,-8,105.5,-7],
[131,-1,135,-3.3,141,-2.6,145,-5.5,148,-8,150,-10.5,147,-10,143,-9,141,-9,138,-8,137,-5,132.5,-4],[-85,22,-82,23.2,-77,21.5,-74.2,20.2,-78,20,-80,21.8,-84,21.7],
[-88,73,-78,74,-68,70,-62,66,-66,62.5,-73,64,-78,64.5,-82,66,-86,69],
[-180,-72,-150,-77,-120,-74,-100,-72.5,-75,-73.5,-63,-66,-58,-63.6,-65,-69,-60,-75,-45,-78,-30,-77,-15,-72,0,-70,20,-69.5,40,-68,60,-67.5,70,-69,90,-66,110,-66,130,-66,150,-68,165,-71,180,-72,180,-90,-180,-90]];
const WATER=[[28,41.5,28,44,30,46,33,46,35,45,38,47,41.5,42,41.5,41,36,41.5,31,41.2],[47,44,50,46,53,45,53.5,41,54,37,50,37,49,40,47.5,42]];
const hs=(x,y)=>{let h=(x*374761393+y*668265263)|0;h=Math.imul(h^(h>>>13),1274126177);return((h^(h>>>16))>>>0)/4294967295};
function vn(x,y,P){const xi=Math.floor(x),yi=Math.floor(y),xf=x-xi,yf=y-yi,u=xf*xf*(3-2*xf),v=yf*yf*(3-2*yf),a=xi%P,b=(xi+1)%P;return hs(a,yi)*(1-u)*(1-v)+hs(b,yi)*u*(1-v)+hs(a,yi+1)*(1-u)*v+hs(b,yi+1)*u*v}
function fb(u,v,o){let s=0,a=.5,f=6;for(let i=0;i<o;i++){s+=a*vn(u*f,v*f/2,f);f*=2;a*=.5}return s/(1-Math.pow(.5,o))}
const ss=(a,b,x)=>{const t=Math.min(1,Math.max(0,(x-a)/(b-a)));return t*t*(3-2*t)},mx=(a,b,t)=>a+(b-a)*t;
function genEarth(){const W=1024,H=512,mk=document.createElement('canvas');mk.width=W;mk.height=H;const m=mk.getContext('2d');m.fillStyle='#000';m.fillRect(0,0,W,H);
const poly=(p,c)=>{m.fillStyle=c;m.beginPath();for(let i=0;i<p.length;i+=2){const X=(p[i]+180)/360*W,Y=(90-p[i+1])/180*H;i?m.lineTo(X,Y):m.moveTo(X,Y)}m.fill()};
LAND.forEach(p=>poly(p,'#fff'));WATER.forEach(p=>poly(p,'#000'));const md=m.getImageData(0,0,W,H).data;
const ld=(x,y)=>md[((Math.min(H-1,Math.max(0,y|0)))*W+(((x|0)+W)%W))*4]/255;
const c2=()=>{const c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');return[x,x.createImageData(W,H)]},[dx,di]=c2(),[nx,ni]=c2(),[sx,si]=c2(),D=di.data,N=ni.data,S=si.data;
for(let y=0;y<H;y++){const v=y/H,lat=90-v*180,al=Math.abs(lat);for(let x=0;x<W;x++){const u=x/W,i=(y*W+x)*4,ox=x+(fb(u,v,3)-.5)*30,oy=y+(fb(u+.37,v+.21,3)-.5)*30,l=ld(ox,oy);let r,g,b,sp=0,nl=0;
if(l>.5){const e=fb(u+.5,v,5),mo=fb(u*2+.7,v*2+.3,4),lon=u*360-180,tp=Math.min(1,al/45);r=mx(30,66,tp);g=mx(94,112,tp);b=mx(40,52,tp);
const ds=Math.max(0,Math.min(1,(.5-mo)*6))*(al>10&&al<38?1:0);r=mx(r,205,ds);g=mx(g,170,ds);b=mx(b,110,ds);
const tu=ss(52,66,al);r=mx(r,125,tu);g=mx(g,128,tu);b=mx(b,105,tu);const rk=ss(.58,.68,e);r=mx(r,120,rk);g=mx(g,106,rk);b=mx(b,92,rk);
const sn=(al>70||lat<-62||(lat>59&&lon>-75&&lon<-12))?1:Math.max(ss(.74,.82,e)*(al>32?1:0),0);r=mx(r,242,sn);g=mx(g,245,sn);b=mx(b,250,sn);
const br=.8+.4*e;r*=br;g*=br;b*=br;
const lt=(1-sn)*ss(.55,.7,fb(u*7,v*7,3))*ss(.4,.58,fb(u*3+.1,v*3,3))*(.5+.5*hs(x,y))*(al<62?1:0);nl=lt}
else{const nr=Math.min(1,(ld(ox+10,oy)+ld(ox-10,oy)+ld(ox,oy+10)+ld(ox,oy-10))/4*1.8),ov=.85+.3*fb(u*4,v*4,3);r=mx(4,28,nr)*ov;g=mx(24,125,nr)*ov;b=mx(62,170,nr)*ov;
const ic=ss(72,78,al)*(fb(u*3,v*3,3)>.35?1:.6);r=mx(r,225,ic);g=mx(g,235,ic);b=mx(b,245,ic);sp=1-ic}
D[i]=r;D[i+1]=g;D[i+2]=b;D[i+3]=255;N[i]=255*nl*1.2;N[i+1]=190*nl*1.2;N[i+2]=110*nl*1.2;N[i+3]=255;S[i]=S[i+1]=S[i+2]=255*sp;S[i+3]=255}}
dx.putImageData(di,0,0);nx.putImageData(ni,0,0);sx.putImageData(si,0,0);
const cc=document.createElement('canvas');cc.width=512;cc.height=256;const cx2=cc.getContext('2d'),ci=cx2.createImageData(512,256);
for(let y=0;y<256;y++)for(let x=0;x<512;x++){const u=x/512,v=y/256,a=ss(.56,.78,fb(u*2,v*2,6))*(.6+.4*fb(u*5+.3,v*5,3)),i=(y*512+x)*4;ci.data[i]=ci.data[i+1]=ci.data[i+2]=255;ci.data[i+3]=a*235}
cx2.putImageData(ci,0,0);const T=c=>{const t=new T3.CanvasTexture(c);t.anisotropy=8;return t};return[T(dx.canvas),T(nx.canvas),T(sx.canvas),T(cc)]}

function createEarth(scene,onMsg){
const ph=c=>{const k=document.createElement('canvas');k.width=k.height=2;const x=k.getContext('2d');if(c){x.fillStyle=c;x.fillRect(0,0,2,2)}return new T3.CanvasTexture(k)};
const U={tD:{value:ph('#0a2a55')},tN:{value:ph('#000')},tS:{value:ph('#000')},L:{value:new T3.Vector3(10,3,2).normalize()}};
const E3=new T3.Mesh(new T3.SphereGeometry(1,64,48),new T3.ShaderMaterial({uniforms:U,
vertexShader:'varying vec2 vU;varying vec3 vN,vV;void main(){vU=uv;vec4 w=modelMatrix*vec4(position,1.);vN=normalize(mat3(modelMatrix)*normal);vV=cameraPosition-w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}',
fragmentShader:'uniform sampler2D tD,tN,tS;uniform vec3 L;varying vec2 vU;varying vec3 vN,vV;void main(){vec3 N=normalize(vN),V=normalize(vV);float df=dot(N,L);vec3 dy=texture2D(tD,vU).rgb,nt=texture2D(tN,vU).rgb;float sp=texture2D(tS,vU).r,k=smoothstep(-.1,.25,df);vec3 c=dy*(.04+max(df,0.)*1.15)+nt*(1.-k)*1.4;vec3 H=normalize(L+V);c+=vec3(.8,.9,1.)*pow(max(dot(N,H),0.),70.)*sp*k*.9;float rm=pow(1.-max(dot(N,V),0.),3.);c+=vec3(.3,.55,1.)*rm*(.15+.7*smoothstep(-.2,.5,df));c+=vec3(1.,.45,.2)*smoothstep(0.,.12,df)*smoothstep(.3,.12,df)*.12;gl_FragColor=vec4(c,1.);}'}));
E3.add(new T3.Mesh(new T3.SphereGeometry(1.14,48,32),new T3.ShaderMaterial({vertexShader:'varying vec3 n;void main(){n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec3 n;void main(){float i=pow(clamp(-n.z*2.2,0.,1.),2.);gl_FragColor=vec4(.33,.67,1.,i*.9);}',side:T3.BackSide,blending:T3.AdditiveBlending,transparent:true,depthWrite:false})));
scene.add(E3);
const CL=new T3.Mesh(new T3.SphereGeometry(1.013,64,48),new T3.MeshLambertMaterial({map:ph(null),transparent:true,depthWrite:false,opacity:.9}));scene.add(CL);
const apply=(d,n,s,c)=>{U.tD.value=d;U.tN.value=n;U.tS.value=s;CL.material.map=c;CL.material.needsUpdate=true};
const CDN='https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/textures/planets/';
const load=f=>new Promise((ok,no)=>{const to=setTimeout(()=>no('timeout'),12000);new T3.TextureLoader().load(CDN+f,t=>{clearTimeout(to);t.anisotropy=8;ok(t)},undefined,e=>{clearTimeout(to);no(e)})});
Promise.all(['earth_atmos_2048.jpg','earth_lights_2048.png','earth_specular_2048.jpg','earth_clouds_1024.png'].map(load))
.then(([d,n,s,c])=>{apply(d,n,s,c);onMsg&&onMsg('real')})
.catch(()=>{onMsg&&onMsg('offline');setTimeout(()=>{const[d,n,s,c]=genEarth();apply(d,n,s,c)},60)});
return{E3,CL,tick:dt=>{E3.rotation.y+=dt*.04;CL.rotation.y+=dt*.05}}}