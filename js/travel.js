// variable to represent <form> element
let form = document.querySelector('form');

// function that checks validity of email
function clickCallBack(event) {
  event.preventDefault();
  let bool = form.checkValidity();
  if (bool==true) {
    document.querySelector('form').classList.add('d-none');
    document.querySelector('p').classList.remove('d-none');
  }

  else {
    document.querySelector('form').classList.add('was-validated');
    document.querySelector('button').disabled = true;

  }
}

//event listener to the `form` element that will listen for 'submit' events
form.addEventListener('submit', clickCallBack);