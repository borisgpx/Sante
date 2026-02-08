window.onload = function() {
    const model = document.getElementById('model');

    // On récupère tes données complètes (je simplifie ici, garde ta version complète)
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
                { t: "Lumbago", r: "Évoque un <strong>Tour de rein</strong>." }
            ]
        },
        genou: {
            nom: "Genou",
            choix: [
                { t: "Douleur rotule", r: "Possible <strong>Tendinite</strong>." }
            ]
        }
    };

    function selectZone(id) {
        // 1. ARRÊTER LA ROTATION
        model.autoRotate = false;

        // 2. AFFICHER LES INFOS
        const zone = data[id];
        if (!zone) return;

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
    }

    // On écoute le clic sur TOUS les boutons qui ont la classe "hotspot"
    const hotspots = document.querySelectorAll('.hotspot');
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', () => {
            const zoneId = hotspot.getAttribute('data-id');
            selectZone(zoneId);
        });
    });
};
