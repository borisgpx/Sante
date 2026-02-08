window.onload = function() {
    const data = {
        cervicales: {
            nom: "Cou (Cervicales)",
            choix: [
                { t: "Douleur liée à l'usure ou coup du lapin", r: "Possible <strong>Arthrose ou Entorse cervicale</strong>." },
                { t: "Douleur liée à la posture", r: "Évoque une <strong>Tendinite des scalènes</strong>." },
                { t: "Torticolis ou maux de tête de tension", r: "Possible <strong>Contracture des Trapèzes</strong>." }
            ]
        },
        epaule: {
            nom: "Épaule",
            choix: [
                { t: "Blocage, usure ou luxation", r: "Possible <strong>Capsulite, Arthrose ou Luxation</strong>." },
                { t: "Douleur au mouvement (coiffe des rotateurs)", r: "Évoque une <strong>Tendinite ou Calcification</strong>." },
                { t: "Point douloureux sous l'omoplate", r: "Possible <strong>Contracture du Deltoïde</strong>." }
            ]
        },
        coude: {
            nom: "Coude",
            choix: [
                { t: "Gonflement ou entorse du ligament", r: "Possible <strong>Arthrite ou Entorse</strong>." },
                { t: "Douleur externe ou interne", r: "Évoque une <strong>Épicondylite ou Épitrochléite</strong>." },
                { t: "Tension musculaire avant-bras", r: "Lien avec les <strong>muscles extenseurs/fléchisseurs</strong>." }
            ]
        },
        poignet: {
            nom: "Poignet & Main",
            choix: [
                { t: "Douleur pouce ou doigts", r: "Possible <strong>Rizarthrose ou Kyste</strong>." },
                { t: "Blocage de gaine ou bord du poignet", r: "Évoque une <strong>Ténosynovite de De Quervain</strong>." },
                { t: "Fourmillements ou fatigue musculaire", r: "Possible <strong>Canal carpien</strong>." }
            ]
        },
        dos: {
            nom: "Dos (Lombaires)",
            choix: [
                { t: "Hernie, pincement ou spondylarthrite", r: "Analyse : <strong>Hernie discale ou pincement</strong>." },
                { t: "Douleur le long de la colonne", r: "Possible <strong>Tendinite des Érecteurs du rachis</strong>." },
                { t: "Lumbago ou fatigue posturale", r: "Évoque une <strong>Contracture des Carrés des lombes</strong>." }
            ]
        },
        hanche: {
            nom: "Hanche",
            choix: [
                { t: "Douleur à l'aine ou au côté", r: "Possible <strong>Coxarthrose ou Bursite</strong>." },
                { t: "Douleur profonde (Fessier/Psoas)", r: "Évoque une <strong>Tendinite du Moyen Fessier</strong>." },
                { t: "Douleur à la fesse ou adducteurs", r: "Possible <strong>Syndrome du Piriforme</strong>." }
            ]
        },
        genou: {
            nom: "Genou",
            choix: [
                { t: "Ménisque, croisés ou arthrose", r: "Analyse : <strong>Lésion ou Gonarthrose</strong>." },
                { t: "Essuie-glace, patte d'oie ou rotule", r: "Évoque une <strong>Tendinite Patellaire</strong>." },
                { t: "Déchirure ou claquage musculaire", r: "Possible <strong>Lésion des Ischio/Quadriceps</strong>." }
            ]
        },
        cheville: {
            nom: "Cheville & Pied",
            choix: [
                { t: "Entorse, usure ou Hallux Valgus", r: "Possible <strong>Entorse ou Arthrose</strong>." },
                { t: "Douleur Achille ou avant du pied", r: "Évoque une <strong>Tendinite d'Achille</strong>." },
                { t: "Déchirure mollet ou crampes", r: "Possible <strong>Aponévrosite plantaire</strong>." }
            ]
        }
    };

    function selectZone(id) {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('result').style.display = 'none';
        const card = document.getElementById('question-card');
        card.style.display = 'block';
        document.getElementById('part-title').innerText = data[id].nom;
        
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = ''; 

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

    // Association automatique des clics
    Object.keys(data).forEach(id => {
        const element = document.getElementById('zone-' + id);
        if(element) element.onclick = () => selectZone(id);
    });
};
