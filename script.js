const body = document.querySelector("body");
 

const url = 'https://jsonplaceholder.typicode.com/posts';

const fetchData = async function() {
    try{
        const res = await fetch(url);
        data = await res.json();
    if(res.ok){
        data.forEach(el => {
            const markup = ` <div class="container">
            <h1 class="title"> <span class="span">Title :</span>${el.title}</h1>
            <h2 class="userid"><span class="span">User id :</span>${el.userId}</h2>
            <h2 class="id"><span class="span">User :</span>${el.id}</h2>
            <p class="text"><span class="span">Text :</span>${el.body}</p>
         </div>`;
         body.insertAdjacentHTML("beforeend", markup);
        })
    }else{
        console.log('serveur fail', error);
    }
    }catch(error){
        console.log('fetch fail', error);
    }
    
};

fetchData();