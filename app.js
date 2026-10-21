// AL LÍMITE DEL TIEMPO — app.js
// EDITA AQUÍ tus interacciones

function moverCarrusel(id, dir){
  const el = document.getElementById(id);
  if(!el) return;
  const card = el.querySelector('.card-video, .card-reel');
  const paso = card ? card.offsetWidth + 18 : 300;
  el.scrollBy({left: dir * paso, behavior:'smooth'});
}

function toggleMenu(){
  const n = document.getElementById('nav');
  if(n) n.classList.toggle('movil');
}

// Parallax del hero al hacer scroll
function parallaxScroll(){
  const capa = document.querySelector('.hero-parallax');
  if(!capa) return;
  const y = window.scrollY;
  if(y > window.innerHeight) return;
  capa.style.transform = 'translate3d(0,' + (y * 0.35) + 'px,0) scale(1.06)';
}

// Header compacto al bajar
function headerScroll(){
  const h = document.querySelector('.header');
  if(h) h.classList.toggle('scrolled', window.scrollY > 60);
}

// Oculta las flechas de un carrusel que tiene un solo item de referencia
function ocultarFlechasInnecesarias(){
  document.querySelectorAll('.carrusel-head').forEach(head=>{
    const pista = head.parentElement.querySelector('.carrusel, .reels-track');
    if(!pista) return;
    const items = pista.children.length;
    const btns = head.querySelector('.carrusel-btns');
    if(btns) btns.style.display = items > 1 ? '' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  const y = document.getElementById('anio');
  if(y) y.textContent = new Date().getFullYear();

  ocultarFlechasInnecesarias();

  window.addEventListener('scroll', ()=>{
    parallaxScroll();
    headerScroll();
  }, {passive:true});
  parallaxScroll();
  headerScroll();

  // cerrar menú móvil al hacer clic en un enlace
  document.querySelectorAll('.nav a').forEach(a=>{
    a.addEventListener('click', ()=>{
      const n = document.getElementById('nav');
      if(n) n.classList.remove('movil');
    });
  });
});
