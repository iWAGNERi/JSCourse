
const block = document.querySelector('.block')

const btn = document.querySelector('.btn')

btn.addEventListener('click', () =>{
  console.log(block.classList)
  if(block.classList == 'block'){

  block.classList.add('block-open')
  }
  else {
    block.classList.remove('block-open')
  }
})
