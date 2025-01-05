
let storedData = sessionStorage.getItem('postData');
let loginData = sessionStorage.getItem('login');
if(loginData){
    username = JSON.parse(loginData);
} else {
    username = "Guest";
}
let post;
if(storedData){
    post = JSON.parse(storedData);
    console.log(post);
} else{
    post = [];
}



let btn = document.querySelector('.submit-btn');

if(btn){
    btn.addEventListener('click', function(e){
        e.preventDefault();

        // dd/mm/yyyy
        let currentDate = new Date();
        let day = currentDate.getDate().toString();
        let month = (currentDate.getMonth()+1).toString();
        let year = currentDate.getFullYear();


        let title = document.querySelector('.title').value;
        let topic = document.querySelector('.topic').value;
        let content = document.querySelector('.content').value;
        let post_data = {

            username: username,
            title: title,
            topic: topic,
            date: `${day}/${month}/${year}`,
            content: content,
            likes: 15,
            comments: 3
        }
        
        post.push(post_data);
        

        sessionStorage.setItem('postData', JSON.stringify(post));
        window.location.href = "./home.html";

    });
}






