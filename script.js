const data = {
    genou: {
        nom: "Le Genou",
        choix: [
            { t: "Douleur externe en courant", r: "Possible Syndrome de l'essuie-glace." },
            { t: "Douleur sous la rotule (escaliers)", r: "Possible Syndrome fémoro-patellaire." }
        ]
    },
    cheville: {
        nom: "La Cheville",
        choix: [
            { t: "Torsion brutale + gonflement", r: "Suspicion d'Entorse ou Fracture." },
            { t: "Douleur derrière (Tendon d'Achille)", r: "Possible Tendinite ou Rupture." },
            { t: "Douleur matinale / Raideur", r: "Possible Arthrose ou Arthrite." }
        ]
    }
};

function selectZone(id) {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    const card = document.getElementById('question-card');
    card.style.display = 'block';
    document.getElementById('part-title').innerText = data[id].nom;
    
    const options = document.getElementById('options');
    options.innerHTML = '';
    data[id].choix.forEach(item => {
        const btn = document.createElement('button');
        btn.innerText = item.t;
        btn.onclick = () => {
            const res = document.getElementById('result');
            res.innerHTML = "Analyse : " + item.r;
            res.style.display = 'block';
        };
        options.appendChild(btn);
    });
}

document.getElementById('zone-genou').onclick = () => selectZone('genou');
document.getElementById('zone-cheville').onclick = () => selectZone('cheville');
