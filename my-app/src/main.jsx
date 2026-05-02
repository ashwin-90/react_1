import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
function Myapp(props){
  return(
    <div>
      <h3>yee chal raha tha   {props.name}</h3>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Myapp name="heyy guys"/>
    <App username="hryybro"/>
  </StrictMode>,
)
