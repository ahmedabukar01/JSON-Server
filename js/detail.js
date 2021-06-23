const details = document.querySelector('.details');
const delJson = document.querySelector('.delete');

const id = new URLSearchParams(window.location.search).get('id');

const renderDetails = async () =>{
    const res = await fetch('http://localhost:3000/posts/' +id);
    const post = await res.json();
    
    const templete = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    `;

    details.innerHTML = templete;
}

delJson.addEventListener('click',async ()=>{
    await fetch('http://localhost:3000/posts/'+id,{
        method: 'DELETE',
    })
    window.location.replace('/index.html')
});

window.addEventListener('DOMContentLoaded',()=>renderDetails());