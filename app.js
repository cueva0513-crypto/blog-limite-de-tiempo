// Plantilla vacía — EDITA AQUÍ tus interacciones
function toggleMenu(){
  const n = document.getElementById('nav');
  if(n) n.classList.toggle('movil');
}
function moverCarrusel(id, dir){
  const el = document.getElementById(id);
  if(el) el.scrollBy({left: dir * 280, behavior:'smooth'});
}
document.addEventListener('DOMContentLoaded', ()=>{
  const y = document.getElementById('anio');
  if(y) y.textContent = new Date().getFullYear();
});
