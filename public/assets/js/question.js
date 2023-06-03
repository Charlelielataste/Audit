const questionManager = {
    apiEndpoint: 'http://localhost:3003',


    // *********************************************Fonction appelle a l'api afin de retrouver toute les sections par route***********************
    fetchAndInsertQuestionFromApi: async function (event) {


        // Récupère la liste des questions à l'aide de la fonction fetch()
        const resDocu = await fetch(questionManager.apiEndpoint + "/docu");

        // Boucle sur la liste des questions
        if(resDocu.ok){
            const docus = await resDocu.json();
            for(const docu of docus){
                // pour chaque questions appeler la fonction insertTaskInHtml()
              questionManager.insertQuestionInHtml(docu);
            }

        }
        // Récupère la liste des questions à l'aide de la fonction fetch()
        const resLivraion = await fetch(questionManager.apiEndpoint + "/livraison");

        // Boucle sur la liste des questions
        if(resLivraion.ok){
            const livrs = await resLivraion.json();
            for(const livr of livrs){
                // pour chaque questions appeler la fonction insertTaskInHtml()
              questionManager.insertQuestionInHtml(livr);
            }

        }

        // Récupère la liste des questions à l'aide de la fonction fetch()
        const resStockage = await fetch(questionManager.apiEndpoint + "/stockage");

        // Boucle sur la liste des questions
        if(resStockage.ok){
            const stocks = await resStockage.json();
            for(const stock of stocks){
                // pour chaque questions appeler la fonction insertTaskInHtml()
              questionManager.insertQuestionInHtml(stock);
            }
        }

        // Récupère la liste des questions à l'aide de la fonction fetch()
        const resLegume = await fetch(questionManager.apiEndpoint + "/legumerie");

        // Boucle sur la liste des questions
        if(resLegume.ok){
            const legumes = await resLegume.json();
            for(const legume of legumes){
                // pour chaque questions appeler la fonction insertTaskInHtml()
              questionManager.insertQuestionInHtml(legume);
            }
        }

        // Récupère la liste des questions à l'aide de la fonction fetch()
        const resPrepaF = await fetch(questionManager.apiEndpoint + "/prepafroides");

        // Boucle sur la liste des questions
        if(resPrepaF.ok){
            const prepaFs = await resPrepaF.json();
            for(const prepaF of prepaFs){
                // pour chaque questions appeler la fonction insertTaskInHtml()
              questionManager.insertQuestionInHtml(prepaF);
            }
        }

        // Récupère la liste des questions à l'aide de la fonction fetch()
        const resPrepaC = await fetch(questionManager.apiEndpoint + "/prepachaudes");

        // Boucle sur la liste des questions
        if(resPrepaC.ok){
            const prepaCs = await resPrepaC.json();
            for(const prepaC of prepaCs){
                // pour chaque questions appeler la fonction insertTaskInHtml()
              questionManager.insertQuestionInHtml(prepaC);
            }
        }

        // Récupère la liste des questions à l'aide de la fonction fetch()
        const resPrepaSpe = await fetch(questionManager.apiEndpoint + "/prepaspe");

        // Boucle sur la liste des questions
        if(resPrepaSpe.ok){
            const prepaSpes = await resPrepaSpe.json();
            for(const prepaspe of prepaSpes){
                // pour chaque questions appeler la fonction insertTaskInHtml()
              questionManager.insertQuestionInHtml(prepaspe);
            }
        }

        // Récupère la liste des questions à l'aide de la fonction fetch()
        const resDistri = await fetch(questionManager.apiEndpoint + "/distribution");

        // Boucle sur la liste des questions
        if(resDistri.ok){
            const distris = await resDistri.json();
            for(const distri of distris){
                // pour chaque questions appeler la fonction insertTaskInHtml()
              questionManager.insertQuestionInHtml(distri);
            }
        }

        // Récupère la liste des questions à l'aide de la fonction fetch()
        const resHygPerso = await fetch(questionManager.apiEndpoint + "/hygieneperso");

        // Boucle sur la liste des questions
        if(resHygPerso.ok){
            const hygienepersos = await resHygPerso.json();
            for(const hygieneperso of hygienepersos){
                // pour chaque questions appeler la fonction insertTaskInHtml()
              questionManager.insertQuestionInHtml(hygieneperso);
            }
        }

        // Récupère la liste des questions à l'aide de la fonction fetch()
        const resHygLocaux = await fetch(questionManager.apiEndpoint + "/hygienelocaux");

        // Boucle sur la liste des questions
        if(resHygLocaux.ok){
            const hygienelocaux = await resHygLocaux.json();
            for(const hygienelocau of hygienelocaux){
                // pour chaque questions appeler la fonction insertTaskInHtml()
              questionManager.insertQuestionInHtml(hygienelocau);
            }
        }

        // Récupère la liste des questions à l'aide de la fonction fetch()
        const resTraceTest = await fetch(questionManager.apiEndpoint + "/tracetest");

        // Boucle sur la liste des questions
        if(resTraceTest.ok){
            const tracetests = await resTraceTest.json();
            for(const tracetest of tracetests){
                // pour chaque questions appeler la fonction insertTaskInHtml()
              questionManager.insertQuestionInHtml(tracetest);
            }
        }


        


    },

    
    
    insertQuestionInHtml: function (questionData) {
        
        if (questionData.section === "audit-documentaire") {;
        const questionTemplate = document.querySelector('.template-question');
        const newQuestion = document.importNode(questionTemplate.content, true);

        // On insère les données de la question dans le HTML
        newQuestion.querySelector('.question-name').textContent = questionData.question;
        newQuestion.querySelector(".obs").addEventListener('click', questionManager.showAddModal);

        newQuestion.querySelector(".obs").dataset.obsId = questionData.id || timestamp;
        newQuestion.querySelector(".score").dataset.scoreId = questionData.id || timestamp;
        newQuestion.querySelector(".comment").dataset.commentId = questionData.id || timestamp;
        newQuestion.querySelector(".pnni-hidden").dataset.pnniId = questionData.id || timestamp;

        if (questionData.pnni === 1) {
            const targetPnni = newQuestion.querySelector('.question-name');
            targetPnni.classList.add('pnni');

        }

        // On insère le HTML de la tâche dans la page
        document.querySelector('#docubody').append(newQuestion);
        }

        if (questionData.section === "livraison-reception") {;
            const questionTemplate = document.querySelector('.template-question');
            const newQuestion = document.importNode(questionTemplate.content, true);
    
            // On insère les données de la question dans le HTML
            newQuestion.querySelector('.question-name').textContent = questionData.question;
            newQuestion.querySelector(".obs").addEventListener('click', questionManager.showAddModal);
    
            newQuestion.querySelector(".obs").dataset.obsId = questionData.id || timestamp;
            newQuestion.querySelector(".score").dataset.scoreId = questionData.id || timestamp;
            newQuestion.querySelector(".comment").dataset.commentId = questionData.id || timestamp;
            newQuestion.querySelector(".pnni-hidden").dataset.pnniId = questionData.id || timestamp;

            if (questionData.pnni === 1) {
                const targetPnni = newQuestion.querySelector('.question-name');
                targetPnni.classList.add('pnni');
    
            }
            // On insère le HTML de la tâche dans la page
            document.querySelector('#livraisonbody').append(newQuestion);
            }

        if (questionData.section === "stockage-primaire") {;
            const questionTemplate = document.querySelector('.template-question');
            const newQuestion = document.importNode(questionTemplate.content, true);
    
            // On insère les données de la question dans le HTML
            newQuestion.querySelector('.question-name').textContent = questionData.question;
            newQuestion.querySelector(".obs").addEventListener('click', questionManager.showAddModal);
    
            newQuestion.querySelector(".obs").dataset.obsId = questionData.id || timestamp;
            newQuestion.querySelector(".score").dataset.scoreId = questionData.id || timestamp;
            newQuestion.querySelector(".comment").dataset.commentId = questionData.id || timestamp;
            newQuestion.querySelector(".pnni-hidden").dataset.pnniId = questionData.id || timestamp;

            if (questionData.pnni === 1) {
                const targetPnni = newQuestion.querySelector('.question-name');
                targetPnni.classList.add('pnni');
    
            }
            // On insère le HTML de la tâche dans la page
            document.querySelector('#stockagebody').append(newQuestion);
            }

        if (questionData.section === "legumerie-deboitage") {;
            const questionTemplate = document.querySelector('.template-question');
            const newQuestion = document.importNode(questionTemplate.content, true);
    
            // On insère les données de la question dans le HTML
            newQuestion.querySelector('.question-name').textContent = questionData.question;
            newQuestion.querySelector(".obs").addEventListener('click', questionManager.showAddModal);
    
            newQuestion.querySelector(".obs").dataset.obsId = questionData.id || timestamp;
            newQuestion.querySelector(".score").dataset.scoreId = questionData.id || timestamp;
            newQuestion.querySelector(".comment").dataset.commentId = questionData.id || timestamp;
            newQuestion.querySelector(".pnni-hidden").dataset.pnniId = questionData.id || timestamp;

            if (questionData.pnni === 1) {
                const targetPnni = newQuestion.querySelector('.question-name');
                targetPnni.classList.add('pnni');
    
            }
            // On insère le HTML de la tâche dans la page
            document.querySelector('#legumeriebody').append(newQuestion);
            }

        if (questionData.section === "preparations-froides") {;
            const questionTemplate = document.querySelector('.template-question');
            const newQuestion = document.importNode(questionTemplate.content, true);
    
            // On insère les données de la question dans le HTML
            newQuestion.querySelector('.question-name').textContent = questionData.question;
            newQuestion.querySelector(".obs").addEventListener('click', questionManager.showAddModal);
    
            newQuestion.querySelector(".obs").dataset.obsId = questionData.id || timestamp;
            newQuestion.querySelector(".score").dataset.scoreId = questionData.id || timestamp;
            newQuestion.querySelector(".comment").dataset.commentId = questionData.id || timestamp;
            newQuestion.querySelector(".pnni-hidden").dataset.pnniId = questionData.id || timestamp;

            if (questionData.pnni === 1) {
                const targetPnni = newQuestion.querySelector('.question-name');
                targetPnni.classList.add('pnni');
    
            }
            // On insère le HTML de la tâche dans la page
            document.querySelector('#prepafbody').append(newQuestion);
            }

        if (questionData.section === "preparations-chaudes") {;
            const questionTemplate = document.querySelector('.template-question');
            const newQuestion = document.importNode(questionTemplate.content, true);
    
            // On insère les données de la question dans le HTML
            newQuestion.querySelector('.question-name').textContent = questionData.question;
            newQuestion.querySelector(".obs").addEventListener('click', questionManager.showAddModal);
    
            newQuestion.querySelector(".obs").dataset.obsId = questionData.id || timestamp;
            newQuestion.querySelector(".score").dataset.scoreId = questionData.id || timestamp;
            newQuestion.querySelector(".comment").dataset.commentId = questionData.id || timestamp;
            newQuestion.querySelector(".pnni-hidden").dataset.pnniId = questionData.id || timestamp;

            if (questionData.pnni === 1) {
                const targetPnni = newQuestion.querySelector('.question-name');
                targetPnni.classList.add('pnni');
    
            }
            // On insère le HTML de la tâche dans la page
            document.querySelector('#prepacbody').append(newQuestion);
            }
            
        if (questionData.section === "preparations-specifique") {;
            const questionTemplate = document.querySelector('.template-question');
            const newQuestion = document.importNode(questionTemplate.content, true);
    
            // On insère les données de la question dans le HTML
            newQuestion.querySelector('.question-name').textContent = questionData.question;
            newQuestion.querySelector(".obs").addEventListener('click', questionManager.showAddModal);
    
            newQuestion.querySelector(".obs").dataset.obsId = questionData.id || timestamp;
            newQuestion.querySelector(".score").dataset.scoreId = questionData.id || timestamp;
            newQuestion.querySelector(".comment").dataset.commentId = questionData.id || timestamp;
            newQuestion.querySelector(".pnni-hidden").dataset.pnniId = questionData.id || timestamp;

            if (questionData.pnni === 1) {
                const targetPnni = newQuestion.querySelector('.question-name');
                targetPnni.classList.add('pnni');
    
            }
            // On insère le HTML de la tâche dans la page
            document.querySelector('#prepaspebody').append(newQuestion);
            }

        if (questionData.section === "distribution") {;
            const questionTemplate = document.querySelector('.template-question');
            const newQuestion = document.importNode(questionTemplate.content, true);
    
            // On insère les données de la question dans le HTML
            newQuestion.querySelector('.question-name').textContent = questionData.question;
            newQuestion.querySelector(".obs").addEventListener('click', questionManager.showAddModal);
    
            newQuestion.querySelector(".obs").dataset.obsId = questionData.id || timestamp;
            newQuestion.querySelector(".score").dataset.scoreId = questionData.id || timestamp;
            newQuestion.querySelector(".comment").dataset.commentId = questionData.id || timestamp;
            newQuestion.querySelector(".pnni-hidden").dataset.pnniId = questionData.id || timestamp;

            if (questionData.pnni === 1) {
                const targetPnni = newQuestion.querySelector('.question-name');
                targetPnni.classList.add('pnni');
    
            }
            // On insère le HTML de la tâche dans la page
            document.querySelector('#distributionbody').append(newQuestion);
            }

        if (questionData.section === "hygiene-personnel") {;
            const questionTemplate = document.querySelector('.template-question');
            const newQuestion = document.importNode(questionTemplate.content, true);
    
            // On insère les données de la question dans le HTML
            newQuestion.querySelector('.question-name').textContent = questionData.question;
            newQuestion.querySelector(".obs").addEventListener('click', questionManager.showAddModal);
    
            newQuestion.querySelector(".obs").dataset.obsId = questionData.id || timestamp;
            newQuestion.querySelector(".score").dataset.scoreId = questionData.id || timestamp;
            newQuestion.querySelector(".comment").dataset.commentId = questionData.id || timestamp;
            newQuestion.querySelector(".pnni-hidden").dataset.pnniId = questionData.id || timestamp;

            if (questionData.pnni === 1) {
                const targetPnni = newQuestion.querySelector('.question-name');
                targetPnni.classList.add('pnni');
    
            }
            // On insère le HTML de la tâche dans la page
            document.querySelector('#hygienepbody').append(newQuestion);
            }

        if (questionData.section === "hygiene-locaux") {;
            const questionTemplate = document.querySelector('.template-question');
            const newQuestion = document.importNode(questionTemplate.content, true);
    
            // On insère les données de la question dans le HTML
            newQuestion.querySelector('.question-name').textContent = questionData.question;
            newQuestion.querySelector(".obs").addEventListener('click', questionManager.showAddModal);
    
            newQuestion.querySelector(".obs").dataset.obsId = questionData.id || timestamp;
            newQuestion.querySelector(".score").dataset.scoreId = questionData.id || timestamp;
            newQuestion.querySelector(".comment").dataset.commentId = questionData.id || timestamp;
            newQuestion.querySelector(".pnni-hidden").dataset.pnniId = questionData.id || timestamp;

            if (questionData.pnni === 1) {
                const targetPnni = newQuestion.querySelector('.question-name');
                targetPnni.classList.add('pnni');
    
            }
            // On insère le HTML de la tâche dans la page
            document.querySelector('#hygienelbody').append(newQuestion);
            }

            if (questionData.section === "trace-test") {;
                const questionTemplate = document.querySelector('.template-question');
                const newQuestion = document.importNode(questionTemplate.content, true);
        
                // On insère les données de la question dans le HTML
                newQuestion.querySelector('.question-name').textContent = questionData.question;
                newQuestion.querySelector(".obs").addEventListener('click', questionManager.showAddModal);
        
                newQuestion.querySelector(".obs").dataset.obsId = questionData.id || timestamp;
                newQuestion.querySelector(".score").dataset.scoreId = questionData.id || timestamp;
                newQuestion.querySelector(".comment").dataset.commentId = questionData.id || timestamp;
                newQuestion.querySelector(".pnni-hidden").dataset.pnniId = questionData.id || timestamp;
    
                if (questionData.pnni === 1) {
                    const targetPnni = newQuestion.querySelector('.question-name');
                    targetPnni.classList.add('pnni');
        
                }
                // On insère le HTML de la tâche dans la page
                document.querySelector('#tracetestbody').append(newQuestion);
            }
    

    },

    
    
    showAddModal: async (e) => {
        let modal = document.getElementById('addQuestionModal');

        const questionId = e.target.closest('.obs').dataset.obsId;
        modal.querySelector('input[name="question_id"]').value = questionId;

        const res = await fetch(questionManager.apiEndpoint + `/question/${questionId}`, {
            method: 'GET',
        })

        const question = await res.json();
        let target = modal.querySelector('#questionhelp');
        target.textContent = question.question;
        
        const response = await fetch(questionManager.apiEndpoint + "/obs", {
            method: 'GET',
        })

        const observations = await response.json();
        
        document.querySelectorAll('.obs-select').forEach((e)=>e.remove());
    
        for (const observation of observations) {
        let selectList = document.createElement("option");
        let target = modal.querySelector('select');
        selectList.classList.add('obs-select');
        selectList.textContent = observation.name;
        target.appendChild(selectList);
       
        
    }

        // Je lui ajoute la classe is-active
        modal.classList.add('is-active');
    },

    
    
    handleSelectFormSubmit: async (e) => {

        // on empeche le rechargement de la page et donc de prévenir du comportement par défaut d'un formulaire
        e.preventDefault();
        // c.f. la doc, je crée un nouvel instance de la classe FormData, qui permettra d'envoyer les données
        const modal = document.getElementById('addQuestionModal');
        const id = modal.querySelector('input').value;

        const formData = new FormData(e.target);
        const obs = formData.get("name");
        const comment = formData.get("comment");
        
        
        try {
            const response = await fetch(questionManager.apiEndpoint + `/question/${id}`, {
                method: 'GET',
            })
    
            const question = await response.json();

            
            const res = await fetch(questionManager.apiEndpoint + "/obs", {
                method: 'GET',
            });

            const observations = await res.json();

            const found = observations.find(element => element.name === obs);
            
            if (!res.ok) {

                const error = await res.json();
                throw error;

            } 
            
            else {
                // dans le cas ou ça se passe bien

                const modalobs = document.querySelector(`[data-obs-id="${id}"]`);
                const modalscore = document.querySelector(`[data-score-id="${id}"]`);
                const modalcomment = document.querySelector(`[data-comment-id="${id}"]`);
                const modalPnni = document.querySelector(`[data-pnni-id="${id}"]`);
                modalobs.textContent = obs;
                modalscore.textContent = found.score;
                modalcomment.textContent = comment;
                modal.querySelector('textarea').value= '';

                if (obs === "Non conforme (C)" || obs === "Récurrence (D)" || obs === "Point de conformité (A)" || obs === "Point d'amélioration (B)") {
                    if (modalscore.classList !== "counter-score") {
                        modalscore.classList.add('counter-score');
                    }
                    modalobs.classList.remove("gray");
                    modalscore.classList.remove("gray");
                    modalcomment.classList.remove("gray");
                }

                // affichage du mauvais comm
                if (obs === "Non conforme (C)" || obs === "Récurrence (D)") {
                    const commentTemplate = document.querySelector('.template-comment');
                    const newComment = document.importNode(commentTemplate.content, true);
                    newComment.querySelector(".delete").addEventListener('click', toolsModule.erasePoint);
                    newComment.querySelector('.items').textContent = question.question;
                    newComment.querySelector('.section').textContent = question.section;
                    newComment.querySelector('.badcomment').textContent = question.comment;
                    document.querySelector('#badcomment').append(newComment);

                }

                if ((obs === "Non conforme (C)" || obs === "Récurrence (D)") && question.pnni === 1){
                    modalPnni.textContent = question.pnni;
                }

                if (obs === "Non Audité") {
                    modalscore.classList.remove("counter-score");
                    modalscore.textContent = "retranché de la note max";
                    modalobs.classList.add("gray");
                    modalscore.classList.add("gray");
                    modalcomment.classList.add("gray");
                }
                
            }
        } catch (err) {
            alert("une erreur s'est produite");
            console.error(err);
        }
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

};