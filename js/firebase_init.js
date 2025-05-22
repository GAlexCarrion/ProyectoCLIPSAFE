    // js/firebase_init.js

    // Importa las funciones necesarias de Firebase SDK
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
    import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
    import { getFirestore, collection, addDoc, getDocs, query, where, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

    
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    const firebaseConfig = {
      apiKey: "AIzaSyB0F2sUYLU5vBsQC8T80_3ghFV825qDI14",
      authDomain: "clipsafe-1369a.firebaseapp.com",
      projectId: "clipsafe-1369a",
      storageBucket: "clipsafe-1369a.firebasestorage.app",
      messagingSenderId: "254716229039",
      appId: "1:254716229039:web:57be0484a9e4b03ad92b5a"
    };
    const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

    // Inicializa Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    // Variables para almacenar el estado de autenticación y el ID de usuario
    let currentUserId = null;
    let isAuthReady = false;

    // Función para iniciar sesión (con token personalizado o anónimamente si no hay token)
    async function initializeAuth() {
        try {
            if (initialAuthToken) {
                await signInWithCustomToken(auth, initialAuthToken);
                console.log("Sesión iniciada con token personalizado (desde Canvas).");
            } else {
                await signInAnonymously(auth);
                console.log("Sesión iniciada anónimamente (localmente).");
            }
        } catch (error) {
            console.error("Error al iniciar sesión en Firebase:", error);
            isAuthReady = true;
        }
    }

    // Escucha cambios en el estado de autenticación
    onAuthStateChanged(auth, (user) => {
        if (user) {
            currentUserId = user.uid;
            console.log("Usuario autenticado:", currentUserId);
        } else {
            currentUserId = null;
            console.log("Usuario no autenticado.");
        }
        isAuthReady = true;
    });

    // Llama a la función de inicialización de autenticación
    initializeAuth();

    // Exporta las instancias de Firebase para que puedan ser usadas en otras partes de la aplicación
    export { db, auth, currentUserId, isAuthReady, collection, addDoc, getDocs, query, where, doc, updateDoc, deleteDoc, appId };
    