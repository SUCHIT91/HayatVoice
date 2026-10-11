import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="assistant">
    <h1>HayatVoice</h1>
    <p>Your personal AI assistant</p>
    <div class="orb">✨</div>
    <p id="status">Hello! I'm ready to help.</p>
    <p id="transcript"></p>
    <button id="talk">🎤 Start Talking</button>
  </main>
`

const status = document.querySelector('#status')
const transcript = document.querySelector('#transcript')
const talk = document.querySelector('#talk')

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

if (!SpeechRecognition) {
  status.textContent = 'Voice recognition is not supported on this device.'
} else {
  const recognition = new SpeechRecognition()
  recognition.lang = 'en-IN'
  recognition.continuous = false
  recognition.interimResults = false

  recognition.onstart = () => {
    status.textContent = 'Listening... Speak now!'
    talk.textContent = '🎙️ Listening...'
    talk.disabled = true
  }

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript
    transcript.textContent = 'You said: ' + text
    status.textContent = 'I heard you! Voice recognition is working.'
  }

  recognition.onerror = (event) => {
    status.textContent = 'Voice error: ' + event.error
  }

  recognition.onend = () => {
    talk.textContent = '🎤 Start Talking'
    talk.disabled = false
  }

  talk.addEventListener('click', () => {
    status.textContent = 'Starting microphone...'
    try {
      recognition.start()
    } catch (error) {
      status.textContent = 'Could not start microphone: ' + error.message
    }
  })
}
