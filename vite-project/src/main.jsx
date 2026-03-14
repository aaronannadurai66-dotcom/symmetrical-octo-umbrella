import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)




{
  object.create = function (proto, propertiesObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function' || proto === null) {
      throw new TypeError('Object prototype may only be an Object or null');
    }
    function F() {}
    F.prototype = proto;
    const obj = new F();
    if (propertiesObject !== undefined) {
      Object.defineProperties(obj, propertiesObject);
    }
    return obj;
  };

  
}
