const timeModule = {
    

    showTimeModal: async (e) => {
        const button = document.getElementById("auditStart");
        button.classList.add('is-hidden');
        const restartButton = document.getElementById("auditreStart");
        restartButton.classList.remove('is-hidden');

        let modal = document.getElementById('addTimeModal');

        const response = await fetch(questionManager.apiEndpoint + "/etablissement", {
            method: 'GET',
        })
        const etablissements = await response.json();

        for (const etablissement of etablissements) {
        let selectList = document.createElement("option");
        let target = modal.querySelector('.etabli');
        selectList.classList.add('etablissement-select');
        selectList.textContent = etablissement.name;
        target.appendChild(selectList);
       
        
    }

        // Je lui ajoute la classe is-active
        modal.classList.add('is-active');
    },


    showEndModal: async (e) => {
        let modal = document.getElementById('endingModal');
         // Je lui ajoute la classe is-active
        modal.classList.add('is-active');
    },

    showPhotoModal: async (e) => {
        let modal = document.getElementById('photoModal');

        const targetPh = e.target.closest('.box').id;
        modal.querySelector('input[name="photo_id"]').value = targetPh;

        // Je lui ajoute la classe is-active
        modal.classList.add('is-active');
    },



    handleSelectFormSubmit: async (e) => {

        // on empeche le rechargement de la page et donc de prévenir du comportement par défaut d'un formulaire
        e.preventDefault();
        // c.f. la doc, je crée un nouvel instance de la classe FormData, qui permettra d'envoyer les données
        const formData = new FormData(e.target);
        const time = formData.get("appt");
        const day = formData.get("day");
        const month = formData.get("month");
        const year = formData.get("year");
        const auditeur = formData.get("auditeur");
        const etablissement = formData.get("etablissement");

        const modalTime = document.getElementById('time');
        
        const modalDate = modalTime.querySelector('.date');
        const modalAppt = modalTime.querySelector('.appt');
        const modalAudit = modalTime.querySelector('.auditeur');
        const modalEtabli = modalTime.querySelector('.etablissement-audit')

        modalDate.textContent = `${day} ${month} ${year}`;
        modalAppt.textContent = time;
        modalAudit.textContent = auditeur;
        modalEtabli.textContent = etablissement;
        
        toolsModule.hideModals();
        toolsModule.calculPnni();
        toolsModule.calculScoreFinal();

        toolsModule.calculScoreDocu();
        toolsModule.calculScoreLivraison();
        toolsModule.calculScoreStockage();
        toolsModule.calculScoreLegume();
        toolsModule.calculScoreFroid();
        toolsModule.calculScoreChaud();
        toolsModule.calculScoreSpe();
        toolsModule.calculScoreDistri();
        toolsModule.calculScorePerso();
        toolsModule.calculScoreLocaux();
        toolsModule.calculScoreTrace();
    },

    handleEndingFormSubmit: async (e) => {

        // on empeche le rechargement de la page et donc de prévenir du comportement par défaut d'un formulaire
        e.preventDefault();
        // c.f. la doc, je crée un nouvel instance de la classe FormData, qui permettra d'envoyer les données
        const formData = new FormData(e.target);
        const conclu = formData.get("conclusion");
        const amelior = formData.get("pointaameliorer");
        const time = formData.get("appt");
        
        const modalConclu = document.getElementById('commentconculsion');
        const modalAmelior = document.getElementById('amelioration');
        const modalTime = document.getElementById('endinghour');

        modalConclu.textContent = conclu;
        modalAmelior.textContent = amelior;
        modalTime.textContent = time;
     
        const exportPdf = document.querySelector("#pdf-btn");
        exportPdf.classList.remove("is-hidden");

        const name = document.getElementById("etablissement").textContent;

        const score_docu_string = document.getElementById("docu").textContent;
        const score_docu = parseFloat(score_docu_string);

        const score_livraison_string = document.getElementById("livraison").textContent;
        const score_livraison = parseFloat(score_livraison_string);

        const score_stock_string = document.getElementById("stock").textContent;
        const score_stock = parseFloat(score_stock_string);

        const score_legume_string = document.getElementById("legume").textContent;
        const score_legume = parseFloat(score_legume_string);

        const score_prepacold_string = document.getElementById("prepacold").textContent;
        const score_prepacold = parseFloat(score_prepacold_string);

        const score_prepahot_string = document.getElementById("prepahot").textContent;
        const score_prepahot = parseFloat(score_prepahot_string);

        const score_prepaspe_string = document.getElementById("prepaspe").textContent;
        const score_prepaspe = parseFloat(score_prepaspe_string);

        const score_distri_string = document.getElementById("distri").textContent;
        const score_distri = parseFloat(score_distri_string);

        const score_hygperso_string = document.getElementById("hygperso").textContent;
        const score_hygperso = parseFloat(score_hygperso_string);

        const score_hyglocaux_string = document.getElementById("hyglocaux").textContent;
        const score_hyglocaux = parseFloat(score_hyglocaux_string);

        const score_tracetest_string = document.getElementById("tracetest").textContent;
        const score_tracetest = parseFloat(score_tracetest_string);

        const score_scoreglobal_string = document.getElementById("score-global").textContent;
        const score_scoreglobal = parseFloat(score_scoreglobal_string);

        const month = formData.get("month");
        const year_recup = formData.get("year");
        const year = parseInt(year_recup);







        



 
         // Envoyer les données à l'API
 
             // On précise dans les options de fetch que la méthode est en POST et on lui donne le corps de la requete
            //  const res = await fetch(questionManager.apiEndpoint + "/synthese", {
            //      method: 'POST',
            //      // les donnees envoyé a l'API
            //      body: 
            //  });
 
            //  if (!res.ok) {
 
            //      const error = await res.json();
            //      throw error;
 
            //  } else {
            //      // dans le cas ou ça se passe bien
            //      const synth = await res.json();
            //  }
                 // Après confirmation de l'API insérer la tâche dans la page (il y a une fonction toute prete pour ça ;) 
                 // en utilisant la valeur de retour de l'
        toolsModule.hideModals();
    },

    handleSelectPhotoSubmit: async (e) => {

        // on empeche le rechargement de la page et donc de prévenir du comportement par défaut d'un formulaire
        e.preventDefault();
        // c.f. la doc, je crée un nouvel instance de la classe FormData, qui permettra d'envoyer les données
        const modal = document.getElementById('photoModal');

        if (modal.querySelector('input[name="photo"]').value === '') {
            return alert ("Aucune photo choisi");
        }

        const id = modal.querySelector('input[name="photo_id"]').value;
        
        const modalPho = document.getElementById(id);

        const preview = modalPho.querySelector(".phototarget");

        const photoTemplate = document.querySelector('.template-photo');
        const newPhoto = document.importNode(photoTemplate.content, true);
        newPhoto.querySelector(".delete").addEventListener('click', toolsModule.erasePhoto);
        
        const formData = new FormData(e.target);
        const file = formData.get("photo");

      
        const target = newPhoto.querySelector(".image-container")
        const img = document.createElement("img");
        img.classList.add("obj");
        img.file = file;
        target.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.
        preview.appendChild(target);

        const reader = new FileReader();
        reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
        reader.readAsDataURL(file);
        
        modal.querySelector('input[name="photo"]').value= '';
        
        toolsModule.hideModals();
    },


    Restart : () => {
        location.reload();
    },

    showRule: () => {
        const button = document.getElementById("consigne");
        button.classList.add('is-hidden');
        const hideButton = document.getElementById("hideconsigne");
        hideButton.classList.remove('is-hidden');

        const rule = document.getElementById('rule');
        rule.classList.remove('is-hidden');
    },

    hideRule: () => {
        const button = document.getElementById("consigne");
        button.classList.remove('is-hidden');
        const hideButton = document.getElementById("hideconsigne");
        hideButton.classList.add('is-hidden');

        const rule = document.getElementById('rule');
        rule.classList.add('is-hidden');
    },

    hideNoAudit: (e) => {
        const targetNoAudit = e.target.closest('.table-container');
        const targetscore = targetNoAudit.querySelector('.score-allsection')

        const targetButtonReAudit = e.target.closest('.box');
        const target = targetButtonReAudit.querySelector('.button-reaudit');

        targetscore.classList.remove("score-allsection");
        targetNoAudit.classList.add('is-hidden');

        target.classList.remove('is-hidden');
    },

    showReAudit: (e) => {
        const targetReAudit = e.target.closest('.box');
        const targetButtonReAudit = targetReAudit.querySelector(".table-container");
        const targetscore = targetButtonReAudit.querySelector(".recup");
        const target = targetReAudit.querySelector('.button-reaudit');

        targetscore.classList.add("score-allsection");
        targetButtonReAudit.classList.remove('is-hidden');

        target.classList.add('is-hidden');
    }
};