document.addEventListener('DOMContentLoaded', function() {
    // Modal
    const modal = document.getElementById('privacyModal');
    const privacyLink = document.getElementById('privacyLink');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Abrir modal al hacer clic en el enlace
    privacyLink.onclick = function(event) {
        event.preventDefault();  // Prevenir el comportamiento por defecto del enlace
        modal.style.display = "block";
    }

    // Cerrar modal al hacer clic en la "X"
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Cerrar modal al hacer clic fuera del contenido del modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});