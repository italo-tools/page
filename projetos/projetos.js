function enviarParaWhatsApp() {
    let nome = encodeURIComponent(document.getElementById("nome").value);
    let email = encodeURIComponent(document.getElementById("email").value);
    let telefone = encodeURIComponent(document.getElementById("telefone").value);
    let data = encodeURIComponent(document.getElementById("data").value);
    let servico = encodeURIComponent(document.getElementById("servico").value);

    let mensagem = `Olá, gostaria de agendar um serviço.%0A%0A
    *Nome:* ${nome}%0A%0A
    *Email:* ${email}%0A%0A
    *Telefone:* ${telefone}%0A%0A
    *Data:* ${data}%0A%0A
    *Serviço:* ${servico}`;

    let url = `https://wa.me/5537998037184?text=${mensagem}`;
    window.open(url, "_blank");
}