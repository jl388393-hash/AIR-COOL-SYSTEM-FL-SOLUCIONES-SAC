const hamb=document.querySelector('.hamb'), header=document.querySelector('.header');
if(hamb) hamb.addEventListener('click',()=>header.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('open')));
function sendWA(e){e.preventDefault();const n=document.getElementById('name').value,t=document.getElementById('phone').value,s=document.getElementById('service').value,m=document.getElementById('msg').value;const text=`Hola Air Cool System FL. Mi nombre es ${n}. Teléfono: ${t}. Servicio: ${s}. ${m}`;window.open('https://wa.me/51938294735?text='+encodeURIComponent(text),'_blank')}
