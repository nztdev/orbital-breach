// sim.js: pure simulation and level data (no DOM). Orbits are deterministic Keplerian rails.
const DT=[{n:'Interceptor',c:'#66ccff',rg:2.2,d:[12,3,0]},{n:'Sweeper',c:'#99ff88',rg:1.8,d:[1,14,0]},{n:'Shield array',c:'#ffcc66',rg:2.6,d:[0,0,14]}];
const OP=[['Low circular',1.5,0,1,'fast, close'],['High circular',4,0,1,'slow, wide'],['Elliptical',3.2,.6,1,'swoops in and out'],['Retrograde low',1.8,0,-1,'against the spin']];
const A=Math.PI/180,P1=[9*Math.cos(150*A),9*Math.sin(150*A)],PL=Math.hypot(...P1);
const LV=[
{n:'Rogue Asteroid',k:0,hp:200,rad:.25,hit:1.1,p:P1,v:[-P1[0]/PL*.2,-P1[1]/PL*.2],bear:'150°',types:[0],rec:[[1,60],[2,0],[2,330]],
cls:'My analysis: a rocky body of considerable mass. Area weapons will make little impression upon it.',
h:["Pardon the interruption, Commander. A rogue asteroid is approaching from bearing 150 degrees, with impact expected in about {E} seconds. If I may, interceptors are the appropriate instrument. I would suggest three or four, in high or elliptical orbits, positioned overhead on that side as it closes. The dry run will let you adjust their starting angles at your leisure.",
"Commander, an asteroid approaches from bearing 150 degrees, with impact in roughly {E} seconds. It is quite indifferent to sweeper fire, so interceptors are your best recourse. I calculate around seventeen seconds of combined coverage will be required, ideally toward the end of its approach.",
"Threat: asteroid. Integrity 200. Bearing 150 degrees. Impact in {E} seconds. Interceptor damage 12 per second, sweeper 1, shield nil. The rest, I trust, is in your capable hands."]},
{n:'Debris Swarm',k:1,hp:200,rad:.7,hit:1.8,p:[1,-10],v:[0,.25],bear:'276°',types:[0,1],rec:[[1,180],[2,90],[2,120]],
cls:'My analysis: a fragmented debris cloud. Powerful single shots would be rather wasted on it.',
h:["Forgive me, Commander, but a debris swarm is rising from the south, bearing 276 degrees, and shall pass Earth in about {E} seconds. Sweepers are the proper tool, as interceptors will barely trouble it. I would place sweepers in low orbits that cross its path during the final ten seconds.",
"Commander, a debris swarm approaches from bearing 276 degrees, with impact in about {E} seconds. It is wide and fragmented, so sweepers are most effective. I would aim for coverage between roughly twenty-four and thirty-four seconds.",
"Threat: debris swarm. Integrity 200. Bearing 276 degrees. Impact in {E} seconds. Sweeper damage 14 per second, interceptor 3, shield nil. I shall await your orders."]},
{n:'Solar Storm',k:2,hp:300,rad:.8,hit:1.1,p:[10,0],v:[-.28,0],bear:'0°',types:[0,1,2],rec:[[1,270],[1,300],[2,210]],
cls:'My analysis: a charged plasma front. Only shield arrays can absorb it, I am afraid.',
h:["Commander, I regret to report a solar storm front racing in from the Sun, bearing 0 degrees, arriving in about {E} seconds. Only shield arrays can absorb it. I would suggest placing three or more on orbits that keep them on the sunward side as it approaches.",
"Commander, a storm front approaches from the Sun, bearing 0 degrees, arriving in about {E} seconds. Shield arrays alone will serve. You will need around twenty seconds of combined coverage, so a single pass will not suffice, I am afraid.",
"Threat: solar storm. Integrity 300. Bearing 0 degrees. Impact in {E} seconds. Shield damage 14 per second, all other types nil. Do let me know if you require anything further."]}];
function posAt(it,t){const[,a,e,d]=OP[it.op],M=d*6.2832*t/(8*Math.pow(a,1.5));let E=M;for(let i=0;i<7;i++)E-=(E-e*Math.sin(E)-M)/(1-e*Math.cos(E));const px=a*(Math.cos(E)-e),py=a*Math.sqrt(1-e*e)*Math.sin(E),c=Math.cos(it.ang),s=Math.sin(it.ang);return[px*c-py*s,px*s+py*c]}
function orbitPts(it,n=90){const[,a,ec,d]=OP[it.op],c=Math.cos(it.ang),s=Math.sin(it.ang),o=[];for(let i=0;i<=n;i++){const e=i/n*6.2832,px=a*(Math.cos(e)-ec),py=a*Math.sqrt(1-ec*ec)*Math.sin(e)*d;o.push([px*c-py*s,px*s+py*c])}return o}
function sim(m,pl){const o={st:[],win:false,hit:null};let hp=m.hp,t=0;
for(;t<=80;t+=.1){const tp=[m.p[0]+m.v[0]*t,m.p[1]+m.v[1]*t],sh=pl.map(it=>posAt(it,t)),inr=sh.map((p,i)=>Math.hypot(p[0]-tp[0],p[1]-tp[1])<DT[pl[i].ty].rg+m.rad);
if(t>0)inr.forEach((b,i)=>{if(b)hp-=DT[pl[i].ty].d[m.k]*.1});hp=Math.max(0,hp);o.st.push({t,tp,sh,inr,hp});
if(hp<=0){o.win=true;break}if(Math.hypot(...tp)<=m.hit){o.hit=t;break}}o.end=t;return o}
LV.forEach(m=>m.eta=Math.round(sim(m,[]).end));
