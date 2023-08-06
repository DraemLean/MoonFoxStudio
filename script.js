document.getElementById("submitPost").addEventListener("click", function() {
    var password = document.getElementById("password").value;

    if (password === "AllSentMoon") {
        var title = document.getElementById("title").value;
        var description = document.getElementById("description").value;
        var footer = document.getElementById("footer").value;
        var photo = document.getElementById("photo").value;
        var date = document.getElementById("date").value;

        var post = {
            title: title,
            description: description,
            footer: footer,
            photo: photo,
            date: date
        };

        // Envie a postagem para o servidor (backend) e salve no JSON
        // Exemplo: use fetch() ou XMLHttpRequest para fazer uma requisição ao servidor

        // Depois de salvar, você pode redirecionar para a página de exibição de postagens
        window.location.href = "index.html";
    } else {
        alert("Senha incorreta.");
    }
});
