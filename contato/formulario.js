// formulario de contato
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulario");
    const mensagem = document.getElementById("mensagem-agradecimento");

    const ultimoEnvio = localStorage.getItem("ultimaAvaliacao");
    const agora = new Date().getTime();
    const vinteQuatroHoras = 24 * 60 * 60 * 1000;

    if (ultimoEnvio && agora - ultimoEnvio < vinteQuatroHoras) {
        form.style.display = "none";
        mensagem.style.display = "block";
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { "Accept": "application/json" }
        })
        .then(response => {
            if (response.ok) {
                localStorage.setItem("ultimaAvaliacao", agora);
                form.style.display = "none";
                mensagem.style.display = "block";
            } else {
                alert("Erro ao enviar o formulário. Tente novamente!");
            }
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Ocorreu um problema ao enviar sua mensagem.");
        });
    });
});