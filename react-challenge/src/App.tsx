import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { Toaster } from 'sonner'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
        <Toaster
          richColors
          toastOptions={{
            style: {
              padding: '1rem',
            },
          }}
        />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
