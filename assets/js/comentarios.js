document.getElementById('comment-popup').addEventListener('click', function() {
    document.getElementById('comment-form').style.display = 'block';
});

// Função para fechar o popup
function closePopup() {
    document.getElementById('comment-form').style.display = 'none';}