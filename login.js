const btn = document.querySelector('.submit');

btn.addEventListener('click', function(e){
    e.preventDefault();

    let username = document.querySelector('.username').value;
    // console.log(username);

    sessionStorage.setItem('login', JSON.stringify(username));
    window.location.href = "./home.html";
})
