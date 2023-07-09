let doubled: boolean = false;
let counter: number = 0;
const price = 10

function incrementCounter(upgradeButton: HTMLButtonElement) {
  const increment = doubled ? 2 : 1;
  counter = counter + increment;

  if (counter >= price && doubled === false) {
    // enable double clicker
    upgradeButton.disabled = false
  }
}

function updateCounter(counterButton: HTMLButtonElement) {
  counterButton.innerHTML = `Count is ${counter}`
 
}


export function setupCounter(counterButton: HTMLButtonElement, upgradeButton: HTMLButtonElement) {
  updateCounter(counterButton)
  upgradeButton.innerHTML = `2x modifier! cost: ${price}`

  counterButton.addEventListener('click', () => {
    incrementCounter(upgradeButton);
    updateCounter(counterButton)
  })
}

export function setupUpgrade(upgradeButton: HTMLButtonElement, counterButton: HTMLButtonElement) {
  // setting up the upgrade button
  upgradeButton.disabled = true
  
  
  // setting up what happens when we click it
  upgradeButton.addEventListener('click', () => {
    if(counter >= price) {
    doubled = true
    counter = counter - price
    updateCounter(counterButton)
    upgradeButton.disabled = true
    } 

  })
}

