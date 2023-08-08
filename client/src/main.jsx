import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App'
import ContextTabBookTicketsPlaying from './components/pages/BookTickets/TabBookTickets/ContextTabBookTicketsPlaying'
import RenderListFilmSystem from './components/ListFilmSystem/RenderListFilmSystem'
import RenderGetWindowResize from './views/RenderGetWindowResize'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextTabBookTicketsPlaying>
      <RenderListFilmSystem>
        <RenderGetWindowResize>
          <App />
        </RenderGetWindowResize>
      </RenderListFilmSystem>
    </ContextTabBookTicketsPlaying>
  </React.StrictMode>,
)
