/* OIO MOTOR - URL direto no código (estilo Gemini) */
const MOTORES = {
  duck: 'https://duckduckgo.com/html/?q=',
  google: 'https://www.google.com/search?igu=1&q=',
  brave: 'https://search.brave.com/search?q='
};

// sons iguais ao seu exemplo
const somClique = new Audio('https://actions.google.com/sounds/v1/office/button_push.ogg');
const somSucesso = new Audio('https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg');
function tocar(t){ try{ (t==='ok'?somSucesso:somClique).play() }catch(e){} }

function pesquisar(motor='duck'){
  const q = document.getElementById('busca').value.trim();
  if(!q) return;
  tocar('ok');
  // CRIA O MOTOR: só joga a URL no iframe
  const url = MOTORES[motor] + encodeURIComponent(q);
  document.getElementById('tela').src = url;
  document.getElementById('tela').style.display = 'block';
  // salva no histórico (local, sem Supabase)
  localStorage.setItem('ultima', q);
}

// atalhos dos ícones
const APPS = {
  'Hub Jogos': 'https://detiillimichel-max.github.io/hubs-de-jogos/',
  'Nota Adesiva': 'https://detiillimichel-max.github.io/Nota-adesiva/',
  'Rádio América': 'https://detiillimichel-max.github.io/R-dio-America/',
  'Calculadora': 'https://detiillimichel-max.github.io/Calculadora-simples/'
};
window.abrirApp = (nome)=>{ tocar(); window.open(APPS[nome], '_blank') };
