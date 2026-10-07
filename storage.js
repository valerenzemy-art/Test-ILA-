// --- storage.js ---

const STORAGE_KEY = 'lesen_c1_answers';

// Récupérer toutes les réponses enregistrées depuis le localStorage
function loadAllAnswers() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : {};
    } catch (e) {
        console.error("Erreur lors du chargement du localStorage :", e);
        return {};
    }
}

// Sauvegarder l'état global des réponses
function saveAllAnswers(answersObj) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(answersObj));
    } catch (e) {
        console.error("Erreur lors de la sauvegarde dans le localStorage :", e);
    }
}

// Récupérer le conteneur des réponses pour un test et une tâche spécifique
function getBucket(test, task, answersObj) {
    if (!answersObj[test.id]) answersObj[test.id] = {};
    if (!answersObj[test.id][task.teil]) answersObj[test.id][task.teil] = {};
    return answersObj[test.id][task.teil];
}

// Réinitialiser les réponses d'un test spécifique
function clearTestAnswers(testId, answersObj) {
    if (answersObj[testId]) {
        answersObj[testId] = {};
        saveAllAnswers(answersObj);
    }
}
