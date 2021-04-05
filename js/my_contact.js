const scriptURL = 'https://script.google.com/macros/s/AKfycbyLq5ZjjtoWckrsLXoi0FbzocQzK_QniswkubLJJKISLRNKgaCOq4XMpywc3CQRt0Gi/exec'
const form = document.forms['portfolio-contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
})