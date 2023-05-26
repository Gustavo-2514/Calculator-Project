
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const root = document.querySelector(':root')
const main = document.querySelector('main')

const allowedKeys = ["(",")","/","*","-","+","9","8","7","6","5","4","3","2","1", "0",".","%"," "];

input.addEventListener('keydown', function(ev){
  ev.preventDefault()
  if(allowedKeys.includes(ev.key)){
    input.value += ev.key
    return
  }

  if(ev.key === 'Backspace'){
    input.value = input.value.slice(0,-1)
  }

  if(ev.key === 'Enter'){
    calculate()
  }
})

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
  charKeyBtn.addEventListener('click',function(){
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

document.getElementById('clear').addEventListener('click',function(){
  input.value = ''
  input.focus()
})

document.getElementById('equal').addEventListener('click',calculate)
function calculate(){
  resultInput.classList.add('error')
  resultInput.value = 'ERROR'
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove('error')
}

document.getElementById('theme').addEventListener('click',function(ev){
  const btn = ev.currentTarget

  if(main.dataset.theme === 'dark'){
    main.dataset.theme = 'light'
    btn.innerText = 'Dark Mode'
    root.style.setProperty('--bg-color', '#f1f5f9')
    root.style.setProperty('--border-color', '#aaa')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--prymary-color', '#26834a')
  }
  else{
    btn.innerHTML = 'Light Mode'
    main.dataset.theme = 'dark'
    root.style.setProperty('--bg-color', '#212529')
    root.style.setProperty('--border-color', '#666')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--prymary-color', '#4dff91') 
  }
})

document.getElementById('copyToClipboard').addEventListener('click',function(ev){
  const button = ev.currentTarget
  if(button.innerText === 'Copy'){
  navigator.clipboard.writeText(resultInput.value)
  button.innerText = 'Copied'
  button.classList.add('success')
  }
  else{
    button.innerText = 'Copy'
    button.classList.remove('success')
  }

  
})


