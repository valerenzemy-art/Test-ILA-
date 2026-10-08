const STORAGE_KEY = 'lesen_c1_answers';

// Cache interne pour éviter des appels répétés et coûteux à JSON.parse
let memoryCache = null;

// Récupérer toutes les réponses (depuis le cache ou le localStorage)
export function loadAllAnswers() {
    if (memoryCache !== null) {
        return memoryCache;
    }
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        memoryCache = data ? JSON.parse(data) : {};
    } catch (e) {
        console.error("Erreur lors du chargement du localStorage :", e);
        memoryCache = {};
    }
    return memoryCache;
}

// Sauvegarder l'état global et mettre à jour le cache
export function saveAllAnswers(answersObj) {
    try {
        memoryCache = answersObj;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(answersObj));
    } catch (e) {
        console.error("Erreur lors de la sauvegarde dans le localStorage :", e);
    }
}

// OPTIMISATION : Sauvegarder directement une réponse unique sans tout manipuler manuellement
export function saveSingleAnswer(testId, teilId, questionKey, value) {
    const allAnswers = loadAllAnswers();
    
    if (!allAnswers[testId]) allAnswers[testId] = {};
    if (!allAnswers[testId][teilId]) allAnswers[testId][teilId] = {};
    
    allAnswers[testId][teilId][questionKey] = value;
    saveAllAnswers(allAnswers);
}

// Récupérer le conteneur des réponses pour une tâche spécifique
export function getBucket(test, task) {
    const allAnswers = loadAllAnswers();
    if (!allAnswers[test.id]) allAnswers[test.id] = {};
    if (!allAnswers[test.id][task.teil]) allAnswers[test.id][task.teil] = {};
    return allAnswers[test.id][task.teil];
}

// Réinitialiser les réponses d'un test spécifique
export function clearTestAnswers(testId) {
    const allAnswers = loadAllAnswers();
    if (allAnswers[testId]) {
        delete allAnswers[testId];
        saveAllAnswers(allAnswers);
    }
}

// BONUS : Permettre à l'utilisateur de télécharger sa progression en fichier JSON
export function exportProgressAsJSON() {
    const data = loadAllAnswers();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `progression_c1_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
}
