// IIFE
(function () {
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Variables
    var btnTheme = document.querySelector('.changeTheme');
    var btnThemeForm = document.querySelector('.formModal');
    var modalTheme = document.querySelector('.modalTheme');
    var close = document.querySelector('.close');

    /**
     * Detecta cuando pulsamos el botón de cambiar tema
     */
    function detectChangeTheme() {
        btnTheme.addEventListener('click', () => {
            modalTheme.classList.remove("modalTheme");
            modalTheme.classList.add("modalVisible");
        });
    }

    function detectCloseThemeModal() {
        close.addEventListener('click', (e) => {
            e.preventDefault();
            modalTheme.classList.add("modalTheme");
            modalTheme.classList.remove("modalVisible");
        });
    }

    function detectSubmitModal() {
        btnThemeForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const PRIMARY = document.querySelector('.primary').value;
            const SECONDARY = document.querySelector('.secondary').value;

            cambiarVariables(PRIMARY, SECONDARY);
            saveUserThemePreference(PRIMARY, SECONDARY); // Guarda la preferencia del tema

            modalTheme.classList.add("modalTheme");
            modalTheme.classList.remove("modalVisible");
        });
    }

    function cambiarVariables(color1, color2) {
        const root = document.documentElement;
        root.style.setProperty('--naranja', color1);
        root.style.setProperty('--principal', color2);
    }

    function saveUserThemePreference(primary, secondary) {
        localStorage.setItem('themePreferences', JSON.stringify({ primary, secondary }));
    }

    function loadUserThemPreference() {
        const savedTheme = localStorage.getItem('themePreferences');
        if (savedTheme) {
            const { primary, secondary } = JSON.parse(savedTheme);
            cambiarVariables(primary, secondary);
        }
    }

    //#region Iniciar App
    /**
     * Función encargada de llamar al resto de funciones cuando cargue la página
     */
    function iniciarApp() {
        loadUserThemPreference();
        detectChangeTheme();
        detectCloseThemeModal();
        detectSubmitModal();
    }
})();
