/* ================================
   SITE.JS - JK SOLUÇÕES
   Funções específicas do site
   ================================ */

/* Envio de formulário de contato via WhatsApp */
function sendWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `Olá, meu nome é ${nome}. Telefone: ${telefone} E-mail: ${email} Mensagem: ${mensagem}`;
  const numero = "5545988213899"; // número de destino (WhatsApp da empresa)
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}
