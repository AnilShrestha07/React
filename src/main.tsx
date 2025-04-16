import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/global.css"
import RouterConfig from './config/router.config'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterConfig></RouterConfig>
  </StrictMode>,
)
