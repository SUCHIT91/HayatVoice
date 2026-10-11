import './style.css'
document.querySelector('#app').innerHTML = `
  <main class="assistant">
    <h1>HayatVoice</h1>
    <p>Your personal AI assistant</p>
    <div class="orb">✨</div>
    <p id="status">Hello! I'm ready to help.</p>
    <button id="talk">🎤 Start Talking</button>
  </main>
`

document.querySelector('#talk').addEventListener('click', () => {
  document.querySelector('#status').textContent = 'Hello! Welcome to HayatVoice.'
})

