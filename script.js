window.onload = function() {
    const data = {
        cervicales: { nom: "Cou", choix: [{ t: "Douleur cervicale", r: "Analyse cou." }] },
        dos: { nom: "Dos", choix: [{ t: "Douleur lombaire", r: "Analyse dos." }] },
        genou: { nom: "Genou", choix: [{ t: "Douleur rotule", r: "Analyse genou." }] }
    };

    const hotspots = document.querySelectorAll('.hotspot');
    hotspots.forEach(hotspot => {
        hotspot.onclick = () => {
            const id = hotspot.getAttribute('data-id');
            selectZone(id);
        };
    });

    function selectZone(id) {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('question-card').style.display = 'block';
        document.getElementById('part-title').innerText = data[id].nom;
        const container = document.getElementById('options');
        container.innerHTML = '';
        data[id].choix.forEach(item => {
            const b = document.createElement('button');
            b.innerHTML = item.t;
            b.onclick = () => {
                const r = document.getElementById('result');
                r.style.display = 'block';
                r.innerHTML = item.r;
            };
            container.appendChild(b);
        });
    }
};
