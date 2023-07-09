import './style.css'
import { setupCounter, setupUpgrade } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Superclicker</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="upgrade" type="button">2x Clicks (cost 5)</button>
    </div>
    <p class="docs">
      It's an idle clicker, you know what to do
    </p>
  </div>
`

const counterButton = document.querySelector<HTMLButtonElement>('#counter')!
const upgradeButton = document.querySelector<HTMLButtonElement>('#upgrade')!

setupCounter(counterButton, upgradeButton)
setupUpgrade(upgradeButton, counterButton)
