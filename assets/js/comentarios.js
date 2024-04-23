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
    document.getElementById("nome").value = "";
    document.getElementById("comentario").value = "";
}

function submitCommentForm(event) {
    event.preventDefault(); 

    
    clearForm();
}