

const app = {
    init: function () {

        // On charge la liste des tâches depuis l'API
        questionManager.fetchAndInsertQuestionFromApi();
        app.addListnersToActions();

        window.onbeforeunload = function() {
            return "Voulez vous reinitialisez l'Audit ? ";
          }

        

    },

    addListnersToActions: () => {
        let closeModalButtons = document.querySelectorAll('.modal .close');
        // pour chacun des boutons, j'ajoute l'event listner
        for (let button of closeModalButtons) {
          button.addEventListener('click', toolsModule.hideModals);
        }

        let selectForm = document.querySelector("#addQuestionModal form");
        selectForm.addEventListener('submit', questionManager.handleSelectFormSubmit);

        let selectAllNoAuditButton = document.querySelectorAll('.button-noaudit');
        for (let button of selectAllNoAuditButton) {
            button.addEventListener('click', timeModule.hideNoAudit);
          }

        let selectAllAuditButton = document.querySelectorAll('.button-reaudit');
        for (let button of selectAllAuditButton) {
            button.addEventListener('click', timeModule.showReAudit);
        }
        
        let selectPhotoButton = document.querySelectorAll('.button-photo');
        for (let button of selectPhotoButton) {
            button.addEventListener('click', timeModule.showPhotoModal);
        }

        let selectFormPhoto = document.querySelector("#photoModal form");
        selectFormPhoto.addEventListener('submit', timeModule.handleSelectPhotoSubmit);
        
        
        
        
        
        
        
        let selectStartAudit = document.querySelector('#auditStart');
        selectStartAudit.addEventListener('click', timeModule.showTimeModal);
        
        let selectTimeForm = document.querySelector("#addTimeModal form");
        selectTimeForm.addEventListener('submit', timeModule.handleSelectFormSubmit);

        let selectEndAudit = document.querySelector('#final-btn');
        selectEndAudit.addEventListener('click', timeModule.showEndModal);
        
        let selectendForm = document.querySelector("#endingModal form");
        selectendForm.addEventListener('submit', timeModule.handleEndingFormSubmit);
        
        
        let selectconsigne = document.querySelector('#consigne');
        selectconsigne.addEventListener('click', timeModule.showRule);

        let unSelectconsigne = document.querySelector('#hideconsigne');
        unSelectconsigne.addEventListener('click', timeModule.hideRule);


        let selectreStartAudit = document.querySelector('#auditreStart');
        selectreStartAudit.addEventListener('click', timeModule.Restart);


        let exportToPDF = document.querySelector('#pdf-btn');
        exportToPDF.addEventListener('click', pdfModule.export);

        let cancelPDF = document.querySelector('#pdf-btn-back');
        cancelPDF.addEventListener('click', pdfModule.cancel);
        
        
    }

};

document.addEventListener('DOMContentLoaded', app.init);
