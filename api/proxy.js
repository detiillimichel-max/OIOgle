export default async function handler(req, res) {
  const url = req.query.url
  if(!url) return res.status(400).send('erro')
  try {
    const r = await fetch(url, { headers: {'User-Agent':'Mozilla/5.0'} })
    let html = await r.text()
    html = html.replace(/<head/i, `<head><base href="${new URL(url).origin}">`)
    res.setHeader('Content-Type', 'text/html')
    res.send(html)
  } catch(e) {
    res.send('Erro: '+e.message)
  }
}
