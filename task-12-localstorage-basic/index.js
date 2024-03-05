const form = document.querySelector('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const username=  document.getElementById('username').value;
    const email  =document.getElementById('email').value;
    const phone= document.getElementById('phone').value;
    localStorage.setItem('username',username);
    localStorage.setItem('EMAIL',email);
    localStorage.setItem('PHONE',phone);
})