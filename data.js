
let storedData = sessionStorage.getItem('postData');
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
        let ti = document.querySelector('.title').value;
        let to = document.querySelector('.topic').value;
        let cont = document.querySelector('.content').value;
        let post_data = {
            title: ti,
            topic: to,
            date: Date.now(),
            content: cont,
            likes: 15,
            comments: 3
        }
        
        post.push(post_data);
        

        sessionStorage.setItem('postData', JSON.stringify(post));
        window.location.href = "./home.html";

    });
}






