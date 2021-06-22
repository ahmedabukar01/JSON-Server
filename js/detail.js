const details = document.querySelector('.details');

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
window.addEventListener('DOMContentLoaded',()=>renderDetails());