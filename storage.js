function localStorage(){
    // Stockage d'une valeur
    localStorage.setItem('nom', 'Alice');
    // Stockage d'une autre valeur
    localStorage.nomUtlisateur = 'Bob';

    // Récupération d'une valeur
    const nom = localStorage.getItem('nom');
    console.log('Nom:', nom);
    // Récupération de la deuxième valeur
    const nomUtlisateur = localStorage.nomUtlisateur;
    console.log('Nom d\'utilisateur:', nomUtlisateur);

}

function sessionStorage() {
        // Stockage d'une valeur
        sessionStorage.setItem('cle', 'Valeur enregistrée en session');
        // Stockage d'une autre valeur
        sessionStorage.nomUtlisateur = 'Alice';
    
        // Récupération d'une valeur
        const valeurStockee = sessionStorage.getItem('cle');
        console.log('Valeur stockée en session:', valeurStockee);
        // Récupération de la deuxième valeur
        const nomUtlisateur = sessionStorage.nomU-lisateur;
        console.log('Nom d\'u-lisateur en session:', nomUtlisateur);
}