const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

submit.addEventListener('click', function(){
    if(email.value === 'mikailhossain0202@gmail.com' && password.value === 'password'){
        location.href = 'app.html';
    }else{
        alert('invalid user')
    }
})
