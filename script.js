function ir(){
  const url = document.getElementById('url').value.trim()
  if(!url) return
  abrir(url)
}
function abrir(u){
  let url = u
  if(!url.startsWith('http')){
    url = url.includes('.') ? 'https://'+url : 'https://duckduckgo.com/html/?q='+encodeURIComponent(url)
  }
  document.getElementById('home').style.display = 'none'
  const tela = document.getElementById('tela')
  tela.style.display = 'block'
  tela.src = '/api/proxy?url=' + encodeURIComponent(url)
  document.getElementById('url').value = url
}
function descobrir(){
  document.getElementById('home').style.display = 'grid'
  document.getElementById('tela').style.display = 'none'
}
document.getElementById('url').addEventListener('keydown', e => { if(e.key === 'Enter') ir() })
