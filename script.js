// Edit these four-line chapters with your real memories.
var CH=[["Hello","Where it started. I had no idea what you were about to become to me."],["Easy","The month being around you stopped feeling like effort and started feeling like home."],["Laughing","Somewhere in here you became the person I tell everything to first."],["Seen","You noticed the small things about me. I noticed that you noticed."],["Steady","The month I stopped wondering and started knowing."],["Still you","Six months, and I would choose you again today. And Friday."]];
var m=document.getElementById("months"),note=document.getElementById("note");
function show(i){[].forEach.call(m.children,function(b,j){b.setAttribute("aria-pressed",i===j)});note.innerHTML="<h3 class='serif'></h3><p></p>";note.firstChild.textContent=CH[i][0];note.lastChild.textContent=CH[i][1]}
CH.forEach(function(c,i){var b=document.createElement("button");b.textContent=i+1;b.setAttribute("aria-label","Month "+(i+1)+": "+c[0]);b.onclick=function(){show(i)};m.appendChild(b)});show(5);
// countdown to the next Friday, 00:00 local
function tick(){var now=nowD(),f=new Date(now);f.setHours(0,0,0,0);var d=(5-f.getDay()+7)%7;f.setDate(f.getDate()+d);
var n=document.getElementById("n"),t=document.getElementById("t"),sub=document.getElementById("envsub");
var F=new Date(2026,10,6);if(now>=F)unlock(true);if(now>=F&&now<new Date(2026,10,7)){n.textContent="Today";t.textContent="I get to see you";return}if(now>=new Date(2026,10,7)){n.textContent="6 months";t.textContent="and counting";return}
var ms=f-now,dd=Math.floor(ms/864e5),hh=Math.floor(ms%864e5/36e5);
n.textContent=dd+"d "+hh+"h";t.textContent="until I see you";}
var env=document.getElementById("env"),peek=document.getElementById("peek"),unlocked=false;
function unlock(v){unlocked=v;peek.hidden=v;if(v)document.getElementById("envsub").textContent="It’s Friday. Open it."}
var passwordForm=document.getElementById("password-form"),passwordInput=document.getElementById("surprise-password"),passwordError=document.getElementById("password-error");
function askPassword(){passwordForm.hidden=false;passwordError.hidden=true;passwordInput.value="";passwordInput.focus()}
function openEnv(){env.classList.add("open");env.setAttribute("aria-expanded","true");peek.hidden=true;passwordForm.hidden=true}
passwordForm.onsubmit=function(event){event.preventDefault();if(passwordInput.value.trim().toLowerCase()==="rhoda"){passwordInput.value="";openEnv()}else{passwordError.hidden=false;passwordInput.value="";passwordInput.focus()}};
env.onclick=function(){if(env.classList.contains("open"))return;if(unlocked)askPassword();else{peek.hidden=false;env.animate([{transform:"translateX(-4px)"},{transform:"translateX(4px)"},{transform:"none"}],{duration:220})}};
peek.onclick=askPassword;
var A=document.querySelector('.polaroid img').src,B=document.querySelector('.arch img').src;document.getElementById('fa').src=A;document.getElementById('fb').src=B;
var fl=document.getElementById('flip');fl.onclick=function(){fl.classList.toggle('on')};
// Add #wed, #thu or #fri to the page link to preview a day early.
function nowD(){var h=location.hash;if(h==='#wed')return new Date(2026,10,4,12);if(h==='#thu')return new Date(2026,10,5,12);if(h==='#fri')return new Date(2026,10,6,12);return new Date()}
var D=[new Date(2026,10,4),new Date(2026,10,5),new Date(2026,10,6)],NM=['Wed','Thu','Fri'],FULL=['Wednesday','Thursday','Friday'];
var RS=['You laugh with your whole face.','You make ordinary days feel planned.','You are kind when nobody is watching.','You still surprise me, six months in.','Your smile changes my whole week.','Because it is you. It is always you.'],ri=0,rs=document.getElementById('rs'),rn=document.getElementById('rn');
rn.onclick=function(){if(ri>=RS.length)return;var li=document.createElement('li');li.textContent=RS[ri++];rs.appendChild(li);if(ri===RS.length){rn.textContent='That is six. One for every month.';rn.disabled=true}};
document.getElementById('si').src=B;
var pf=document.getElementById('pf');pf.appendChild(document.getElementById('envsub'));pf.appendChild(env);pf.appendChild(peek);pf.appendChild(passwordForm);
var cur=-1,sci=false,dz=document.getElementById('days');
function un(i){return nowD()>=D[i]}
function scr(){if(sci)return;sci=true;var c=document.getElementById('cv'),w=c.parentNode.clientWidth,h=c.parentNode.clientHeight;c.width=w;c.height=h;var x=c.getContext('2d'),g=x.createLinearGradient(0,0,w,h);g.addColorStop(0,'#E2B84C');g.addColorStop(.5,'#F3D98A');g.addColorStop(1,'#B98F2A');x.fillStyle=g;x.fillRect(0,0,w,h);x.fillStyle='#2a1f00';x.font='italic 500 28px Georgia,serif';x.textAlign='center';x.fillText('Scratch here',w/2,h/2);x.globalCompositeOperation='destination-out';var d=false,k=0;function pt(e){var r=c.getBoundingClientRect(),px=e.clientX-r.left,py=e.clientY-r.top;x.beginPath();x.arc(px,py,26,0,7);x.fill();if(++k%12===0){var a=x.getImageData(0,0,w,h).data,z=0;for(var j=3;j<a.length;j+=64)if(a[j]===0)z++;if(z/(a.length/64)>.4){c.style.opacity=0;c.style.pointerEvents='none'}}}c.onpointerdown=function(e){d=true;c.setPointerCapture(e.pointerId);pt(e)};c.onpointermove=function(e){if(d)pt(e)};c.onpointerup=function(){d=false}}
function showDay(i){cur=i;for(var j=0;j<3;j++){document.getElementById('p'+j).hidden=j!==i;dz.children[j].setAttribute('aria-pressed',j===i)}if(i<2){var o=un(i);document.getElementById('k'+i).hidden=o;document.getElementById('v'+i).hidden=!o;if(!o)document.getElementById('k'+i).textContent='Your '+FULL[i]+' surprise is sealed. Come back then.';if(i===1&&o)scr()}}
function days(){dz.innerHTML='';var now=nowD(),t0=new Date(now.getFullYear(),now.getMonth(),now.getDate());NM.forEach(function(n,i){var b=document.createElement('button');b.className='dy'+(un(i)?'':' lock');var st=un(i)?(+t0===+D[i]?'Today':'Open'):'Locked';b.innerHTML='<b></b>'+st;b.firstChild.textContent=n;b.onclick=function(){showDay(i)};dz.appendChild(b)});var s=0;for(var i=0;i<3;i++)if(un(i))s=i;showDay(cur<0?s:cur)}
days();setInterval(days,6e4);
tick();setInterval(tick,6e4);window.addEventListener('hashchange',function(){cur=-1;days();tick()});
if ("serviceWorker" in navigator && location.protocol !== "file:") navigator.serviceWorker.register("sw.js").catch(()=>{});
