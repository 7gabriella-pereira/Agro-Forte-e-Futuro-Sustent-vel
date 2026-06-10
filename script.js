function mostrarMensagem() {
    alert(
        "O Agro Forte promove inovação, sustentabilidade e desenvolvimento para um futuro melhor!"
    );
}

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Mensagem enviada com sucesso!");

    this.reset();
});