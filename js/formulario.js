// Función para validar el formulario de registro antes de enviarlo
function validarFormulario() {
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const telefonoInput = document.getElementById('telefono');
    const cedulaInput = document.getElementById('cedula');
    const passwordInput = document.getElementById('password');
    const confirmarPasswordInput = document.getElementById('confirmar-password');

    const nombreFeedback = document.getElementById('nombreFeedback');
    const emailFeedback = document.getElementById('emailFeedback');
    const telefonoFeedback = document.getElementById('telefonoFeedback');
    const cedulaFeedback = document.getElementById('cedulaFeedback');
    const passwordFeedback = document.getElementById('passwordFeedback');
    const confirmarPasswordFeedback = document.getElementById('confirmarPasswordFeedback');

    let esValido = true; 

    // Función auxiliar para mostrar/ocultar feedback de validación
    function mostrarFeedback(elemento, feedbackElemento, mensaje, valido) {
        if (valido) {
            elemento.classList.remove('is-invalid');
            elemento.classList.add('is-valid');
            feedbackElemento.style.display = 'none';
        } else {
            elemento.classList.add('is-invalid');
            elemento.classList.remove('is-valid');
            feedbackElemento.textContent = mensaje;
            feedbackElemento.style.display = 'block';
            esValido = false; 
        }
    }

    // --- Validaciones de cada campo ---

    if (nombreInput.value.trim() === '') {
        mostrarFeedback(nombreInput, nombreFeedback, 'El nombre completo es requerido.', false);
    } else {
        mostrarFeedback(nombreInput, nombreFeedback, '', true);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar formato de email
    if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value.trim())) {
        mostrarFeedback(emailInput, emailFeedback, 'Ingresa un correo electrónico válido.', false);
    } else {
        mostrarFeedback(emailInput, emailFeedback, '', true);
    }

    const telefonoRegex = /^\d{10}$/; // Asume 10 dígitos numéricos para ejemplo
    if (telefonoInput.value.trim() === '' || !telefonoRegex.test(telefonoInput.value.trim())) {
        mostrarFeedback(telefonoInput, telefonoFeedback, 'El teléfono es requerido y debe tener 10 dígitos numéricos.', false);
    } else {
        mostrarFeedback(telefonoInput, telefonoFeedback, '', true);
    }

    const cedulaRegex = /^\d{10}$/; // Asume 10 dígitos numéricos para cédula
    if (cedulaInput.value.trim() === '' || !cedulaRegex.test(cedulaInput.value.trim())) {
        mostrarFeedback(cedulaInput, cedulaFeedback, 'La cédula es requerida y debe tener 10 dígitos numéricos.', false);
    } else {
        mostrarFeedback(cedulaInput, cedulaFeedback, '', true);
    }

    if (passwordInput.value.length < 6) {
        mostrarFeedback(passwordInput, passwordFeedback, 'La contraseña debe tener al menos 6 caracteres.', false);
    } else {
        mostrarFeedback(passwordInput, passwordFeedback, '', true);
    }

    if (confirmarPasswordInput.value !== passwordInput.value || confirmarPasswordInput.value.trim() === '') {
        mostrarFeedback(confirmarPasswordInput, confirmarPasswordFeedback, 'Las contraseñas no coinciden.', false);
    } else {
        mostrarFeedback(confirmarPasswordInput, confirmarPasswordFeedback, '', true);
    }

    // Devuelve true si todas las validaciones pasaron, false en caso contrario
    return esValido;
}
