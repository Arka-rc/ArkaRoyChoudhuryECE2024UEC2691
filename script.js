let storedData = sessionStorage.getItem('postData');
let posts;
let post;
if(storedData){
    posts = JSON.parse(storedData);
    console.log(posts);
    for(post of posts){
        let postHtml = `
        <li>
            <a href="">
            <h3 class="title">${post.title}</h3>
            <div class="data">
                <p>Posted by ${post.username}</p>
                <p>${post.topic}</p>
            </div>
            <div class="data">
                <p>Posted on ${post.date}</p>
                <p>${post.likes} Likes</p>
                <p>${post.comments} Comments</p>
                </div>
            </a>
        </li>
        `


        let post_list = document.querySelector('ul');
        post_list.insertAdjacentHTML('beforeend', postHtml);
    }
} 

