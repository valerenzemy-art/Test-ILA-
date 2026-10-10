// storage.js - Gestion du stockage en session (disparaît à la fermeture de l'onglet)

const STORAGE_KEY = 'lesen_c1_answers_session';
let memoryCache = null;

// Récupérer toutes les réponses
export function loadAllAnswers() {
    if (memoryCache !== null) {
        return memoryCache;
    }
    try {
        const data = sessionStorage.getItem(STORAGE_KEY);
        memoryCache = data ? JSON.parse(data) : {};
    } catch (e) {
        console.error("Erreur lors du chargement du sessionStorage :", e);
        memoryCache = {};
    }
    return memoryCache;
}

// Sauvegarder l'état global
export function saveAllAnswers(answersObj) {
    try {
        memoryCache = answersObj;
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answersObj));
    } catch (e) {
        console.error("Erreur lors de la sauvegarde dans le sessionStorage :", e);
    }
}

// Récupérer le conteneur des réponses pour une tâche spécifique
export function getBucket(test, task) {
    const allAnswers = loadAllAnswers();
    if (!allAnswers[test.id]) allAnswers[test.id] = {};
    if (!allAnswers[test.id][task.teil]) allAnswers[test.id][task.teil] = {};
    return allAnswers[test.id][task.teil];
}

// Réinitialiser les réponses d'un test spécifique (ex: au clic sur "Neu starten")
export function clearTestAnswers(testId) {
    const allAnswers = loadAllAnswers();
    if (allAnswers[testId]) {
        delete allAnswers[testId];
        saveAllAnswers(allAnswers);
    }
}

// Vider entièrement la session (fin du test)
export function clearAllSessionAnswers() {
    memoryCache = {};
    sessionStorage.removeItem(STORAGE_KEY);
}
