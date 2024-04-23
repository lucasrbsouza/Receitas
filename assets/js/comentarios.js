document.getElementById('comment-popup').addEventListener('click', function() {
    document.getElementById('comment-form').style.display = 'block';
    clearForm()

});

// Função para fechar o popup
function closeCommentPopup() {
    document.getElementById("comment-form").style.display = "none";
    clearForm()
}

function clearForm() {
    document.getElementById("nome").value = ""; // Limpa o campo de nome
    document.getElementById("comentario").value = ""; // Limpa o campo de comentário
}

function submitCommentForm(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário de recarregar a página
    
    // Lógica para enviar os dados do formulário (você pode adicionar aqui)
    
    clearForm(); // Limpa os campos do formulário após o envio
}