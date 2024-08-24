import { useState } from 'react'
import './App.css'
import AppHeader from './component/header';
import AppSlider from './component/slider';
function App() {
  return(
<div>
  <header>
  <AppHeader />
  </header>

  <main>
    <AppSlider />
  </main>
</div>


  );
}

export default App
