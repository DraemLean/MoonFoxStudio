// Fazer uma requisição para carregar as postagens do arquivo JSON
fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
        const postsDiv = document.getElementById("posts");
        posts.forEach(post => {
            const postHTML = `
                <div class="post">
                    <h2>${post.title}</h2>
                    <img src="${post.photo}" alt="${post.title}">
                    <p>${post.description}</p>
                    <footer>${post.footer}</footer>
                    <p>Data de Criação: ${post.date}</p>
                </div>
            `;
            postsDiv.innerHTML += postHTML;
        });
    })
    .catch(error => {
        console.error('Erro ao carregar as postagens:', error);
    });
