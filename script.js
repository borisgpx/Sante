// On attend que toute la page soit chargée avant de lancer le script
window.onload = function() {
    console.log("Le script est bien lancé !");

    const data = {
        genou: {
            nom: "Le Genou",
            choix: [
                { t: "Douleur externe en courant", r: "Possible <strong>Syndrome de l'essuie-glace</strong>." },
                { t: "Douleur sous la rotule (escaliers)", r: "Possible <strong>Syndrome fémoro-patellaire</strong>." }
            ]
        },
        cheville: {
            nom: "La Cheville",
            choix: [
                { t: "Torsion brutale + gonflement", r: "Suspicion d'<strong>Entorse</strong> ou <strong>Fracture</strong>." },
                { t: "Douleur derrière (Tendon d'Achille)", r: "Possible <strong>Tendinite</strong> ou <strong>Rupture</strong>." },
                { t: "Douleur matinale / Raideur", r: "Possible <strong>Arthrose</strong> ou <strong>Arthrite</strong>." }
            ]
        }
    };

    function selectZone(id) {
        console.log("Zone cliquée : " + id);
        
        // Cacher l'intro et le résultat précédent
        document.getElementById('intro').style.display = 'none';
        document.getElementById('result').style.display = 'none';
        
        // Afficher la carte des questions
        const card = document.getElementById('question-card');
        card.style.display = 'block';
        document.getElementById('part-title').innerText = data[id].nom;
        
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = ''; // On vide les boutons précédents

        // Créer les boutons pour chaque option
        data[id].choix.forEach(item => {
            const btn = document.createElement('button');
            btn.innerHTML = item.t;
            btn.onclick = function() {
                const res = document.getElementById('result');
                res.innerHTML = "<strong>Analyse :</strong> " + item.r;
                res.style.display = 'block';
            };
            optionsContainer.appendChild(btn);
        });
    }

    // On lie les clics aux éléments HTML
    const genouBtn = document.getElementById('zone-genou');
    const chevilleBtn = document.getElementById('zone-cheville');

    if(genouBtn) {
        genouBtn.onclick = () => selectZone('genou');
    }
    if(chevilleBtn) {
        chevilleBtn.onclick = () => selectZone('cheville');
    }
};
