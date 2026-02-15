/* ================================
   GLOBAL.JS - JK SOLUÇÕES
   Funções universais
   ================================ */

/* Menu responsivo (abre/fecha) */
function toggleMenu() {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
}

/* Scroll suave para âncoras */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

/* Validação básica de formulário */
function validarFormulario(formId) {
    const form = document.getElementById(formId);
    let valido = true;

    form.querySelectorAll("input[required], textarea[required]").forEach(campo => {
        if (!campo.value.trim()) {
            campo.classList.add("erro");
            valido = false;
        } else {
            campo.classList.remove("erro");
        }
    });

    return valido;
}

/* Exemplo de uso:
   if (!validarFormulario("formContato")) {
     alert("Por favor, preencha todos os campos obrigatórios.");
   }
*/
