const data = {
    cervicales: {
        nom: "Cou (Cervicales)",
        choix: [
            { t: "Douleur liée à l'usure", r: "Possible <strong>Arthrose</strong>." },
            { t: "Torticolis", r: "Possible <strong>Contracture</strong>." }
        ]
    },
    dos: {
        nom: "Dos (Lombaires)",
        choix: [
            { t: "Douleur vive (Lumbago)", r: "Évoque un <strong>Tour de rein</strong>." },
            { t: "Douleur jambe", r: "Possible <strong>Sciatique</strong>." }
        ]
    },
    genou: {
        nom: "Genou",
        choix: [
            { t: "Douleur rotule", r: "Possible <strong>Syndrome rotulien</strong>." }
        ]
    }
};

// On rend la fonction accessible partout
window.selectZone = function(id) {
    const zone = data[id];
    if (!zone) return;

    // Mise à jour de l'affichage
    document.getElementById('intro').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    
    const card = document.getElementById('question-card');
    card.style.display = 'block';
    document.getElementById('part-title').innerText = zone.nom;
    
    const container = document.getElementById('options');
    container.innerHTML = ''; 

    zone.choix.forEach(item => {
        const btn = document.createElement('button');
        btn.innerHTML = item.t;
        btn.onclick = function() {
            const res = document.getElementById('result');
            res.innerHTML = "<strong>Analyse :</strong> " + item.r;
            res.style.display = 'block';
        };
        container.appendChild(btn);
    });
};
