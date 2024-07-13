import { useState } from 'react'
import "./App.css"

export default function MyApp() {
  {
    const [value,setValue] = useState(0);
    return (
      <>
      <article>
      <header>Counter-App</header>
      <section>
      <h1>{value}</h1>
        <div className='buttons '>
        <button className='btn' onClick = {()=>setValue(value+1)}>+</button>
        <button className='btn' onClick = {()=>setValue(value-1)} disabled = {value === 0} >-</button>
        </div>
      </section>
      <footer>&copy; All Rights Reserved</footer>
      </article>
      </>
    );
  }
}





