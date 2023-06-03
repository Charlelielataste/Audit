const toolsModule = {
    
    // Fonction pour cacher les modals 
    hideModals: () => {
        // tous les modals
        let modals = document.querySelectorAll(".modal");

        // Pour chacun des modals je retire la clase .is-active
        for (let modal of modals) {
            modal.classList.remove('is-active');
        }
    },

    
    
    // Suppression .delete 

    erasePoint: (e) => {
        const point = e.target.closest('.point-regle');
        point.remove();
    },

    erasePhoto: (e) => {
        const photo = e.target.closest('.image-container');
        photo.remove();
    },

    
    
    // Calcul nombre PNNI 
    calculPnni: () => {
        const allPnni = document.getElementsByClassName('pnni-hidden'); 
        let sum = 0; 
        for (const scorePnni of allPnni) {
            tonNumber = Number(scorePnni.textContent)
            sum += tonNumber;
            }
        let targetpnni = document.getElementById('score-pnni');
        targetpnni.textContent = `${sum}`
        if (targetpnni.textContent === "1" ){
            targetpnni.classList.remove("pnni-green")
            targetpnni.classList.add("pnni-red")
        }
    },

    
    
    
    // Calcul final avec Pnni

    calculScoreFinal: () => {
        let targetPnni = document.getElementById("score-pnni");

        let scoreAll = document.getElementsByClassName("score-allsection");
        let numberquestion = scoreAll.length;
        let sum = 0;

        for (const score of scoreAll) {
            tonNumber = Number(score.textContent)
            sum += tonNumber;
            }

        base = numberquestion*100;
        baseDivisible = base/100;
        total = sum/baseDivisible;
        let targetscore = document.getElementById('score-global');

        if(targetPnni.textContent === "1") {
            let totalPnni = total - total * 15 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;

        } 

        if(targetPnni.textContent === "2") {
            let totalPnni = total - total * 27.75 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        }
        
        if(targetPnni.textContent === "3") {
            let totalPnni = total - total * 38.59 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        }
        
        if(targetPnni.textContent === "4") {
            let totalPnni = total - total * 47.80 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        } 

        if(targetPnni.textContent === "5") {
            let totalPnni = total - total * 55.63 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        } 

        if(targetPnni.textContent === "6") {
            let totalPnni = total - total * 62.29 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        } 

        if(targetPnni.textContent === "7") {
            let totalPnni = total - total * 67.94 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        } 

        if(targetPnni.textContent === "8") {
            let totalPnni = total - total * 72.75 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        } 

        if(targetPnni.textContent === "9") {
            let totalPnni = total - total * 76.84 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        } 

        if(targetPnni.textContent === "10") {
            let totalPnni = total - total * 80.31 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        } 

        if(targetPnni.textContent === "11") {
            let totalPnni = total - total * 83.27 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        } 

        if(targetPnni.textContent === "12") {
            let totalPnni = total - total * 85.78 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        } 

        if(targetPnni.textContent === "13") {
            let totalPnni = total - total * 87.91 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        } 

        if(targetPnni.textContent === "14") {
            let totalPnni = total - total * 89.72 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        } 

        if(targetPnni.textContent === "15") {
            let totalPnni = total - total * 91.26 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        } 

        if(targetPnni.textContent === "16") {
            let totalPnni = total - total * 92.57 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        } 

        if(targetPnni.textContent === "17") {
            let totalPnni = total - total * 93.69 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        } 

        if(targetPnni.textContent === "18") {
            let totalPnni = total - total * 94.64 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        } 

        if(targetPnni.textContent === "19") {
            let totalPnni = total - total * 95.44 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        } 

        if(targetPnni.textContent === "20") {
            let totalPnni = total - total * 96.12 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        } 

        if(targetPnni.textContent === "21") {
            let totalPnni = total - total * 96.71 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        }

        if(targetPnni.textContent === "22") {
            let totalPnni = total - total * 97.20 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        }

        if(targetPnni.textContent === "23") {
            let totalPnni = total - total * 97.62 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        }

        if(targetPnni.textContent === "24") {
            let totalPnni = total - total * 97.98 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        }

        if(targetPnni.textContent === "25") {
            let totalPnni = total - total * 98.28 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        }

        if(targetPnni.textContent === "26") {
            let totalPnni = total - total * 98.54 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        }

        if(targetPnni.textContent === "27") {
            let totalPnni = total - total * 98.76 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        }

        if(targetPnni.textContent === "28") {
            let totalPnni = total - total * 98.94 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        }

        if(targetPnni.textContent === "29") {
            let totalPnni = total - total * 99.10 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        }

        if(targetPnni.textContent === "30") {
            let totalPnni = total - total * 99.24 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;
        }

        if(targetPnni.textContent === "31") {
            let totalPnni = total - total * 99.33 / 100;
            targetscore.textContent = `${Math.round(totalPnni*100)/100}`;
            return;

        }else {
            targetscore.textContent = `${Math.round(total*100)/100}`
        }
    },




    // Calcul par section

    calculScoreDocu: () => {
        let modaldocu = document.getElementById('auditdocu');
        let scoredocu = modaldocu.getElementsByClassName('counter-score');
        let numberquestion = scoredocu.length;
        let sum = 0; 

        for (const score of scoredocu) {
        tonNumber = Number(score.textContent)
        sum += tonNumber;
        }
        base = numberquestion*20;
        baseDivisible = base/100;
        total = sum/baseDivisible;
 
        let targetdocu = modaldocu.querySelector('.score-docu');
        targetdocu.textContent = `${Math.round(total*100)/100}`
        },

    calculScoreLivraison: () => {
        let modaldocu = document.getElementById('auditlivraison');
        let scoredocu = modaldocu.getElementsByClassName('counter-score');
        let numberquestion = scoredocu.length;
        let sum = 0; 

        for (const score of scoredocu) {
        tonNumber = Number(score.textContent)
        sum += tonNumber;
        }
        base = numberquestion*20;
        baseDivisible = base/100;
        total = sum/baseDivisible;
    
        let targetdocu = modaldocu.querySelector('.score-livraison');
        targetdocu.textContent = `${Math.round(total*100)/100}`
        },

    calculScoreStockage: () => {
        let modaldocu = document.getElementById('auditstockage');
        let scoredocu = modaldocu.getElementsByClassName('counter-score');
        let numberquestion = scoredocu.length;
        let sum = 0; 

        for (const score of scoredocu) {
        tonNumber = Number(score.textContent)
        sum += tonNumber;
        }
        base = numberquestion*20;
        baseDivisible = base/100;
        total = sum/baseDivisible;
    
        let targetdocu = modaldocu.querySelector('.score-stockage');
        targetdocu.textContent = `${Math.round(total*100)/100}`
        },

    calculScoreLegume: () => {
        let modaldocu = document.getElementById('auditlegume');
        let scoredocu = modaldocu.getElementsByClassName('counter-score');
        let numberquestion = scoredocu.length;
        let sum = 0; 

        for (const score of scoredocu) {
        tonNumber = Number(score.textContent)
        sum += tonNumber;
        }
        base = numberquestion*20;
        baseDivisible = base/100;
        total = sum/baseDivisible;
    
        let targetdocu = modaldocu.querySelector('.score-legume');
        targetdocu.textContent = `${Math.round(total*100)/100}`
        },

    calculScoreFroid: () => {
        let modaldocu = document.getElementById('auditprepaf');
        let scoredocu = modaldocu.getElementsByClassName('counter-score');
        let numberquestion = scoredocu.length;
        let sum = 0; 

        for (const score of scoredocu) {
        tonNumber = Number(score.textContent)
        sum += tonNumber;
        }
        base = numberquestion*20;
        baseDivisible = base/100;
        total = sum/baseDivisible;
    
        let targetdocu = modaldocu.querySelector('.score-prepaf');
        targetdocu.textContent = `${Math.round(total*100)/100}`
        },

    calculScoreChaud: () => {
        let modaldocu = document.getElementById('auditprepac');
        let scoredocu = modaldocu.getElementsByClassName('counter-score');
        let numberquestion = scoredocu.length;
        let sum = 0; 

        for (const score of scoredocu) {
        tonNumber = Number(score.textContent)
        sum += tonNumber;
        }
        base = numberquestion*20;
        baseDivisible = base/100;
        total = sum/baseDivisible;
    
        let targetdocu = modaldocu.querySelector('.score-prepac');
        targetdocu.textContent = `${Math.round(total*100)/100}`
        },

    calculScoreSpe: () => {
        let modaldocu = document.getElementById('auditprepaspe');
        let scoredocu = modaldocu.getElementsByClassName('counter-score');
        let numberquestion = scoredocu.length;
        let sum = 0; 

        for (const score of scoredocu) {
        tonNumber = Number(score.textContent)
        sum += tonNumber;
        }
        base = numberquestion*20;
        baseDivisible = base/100;
        total = sum/baseDivisible;
    
        let targetdocu = modaldocu.querySelector('.score-prepaspe');
        targetdocu.textContent = `${Math.round(total*100)/100}`
        },

    calculScoreDistri: () => {
        let modaldocu = document.getElementById('auditdistri');
        let scoredocu = modaldocu.getElementsByClassName('counter-score');
        let numberquestion = scoredocu.length;
        let sum = 0; 

        for (const score of scoredocu) {
        tonNumber = Number(score.textContent)
        sum += tonNumber;
        }
        base = numberquestion*20;
        baseDivisible = base/100;
        total = sum/baseDivisible;
    
        let targetdocu = modaldocu.querySelector('.score-distri');
        targetdocu.textContent = `${Math.round(total*100)/100}`
        },

    calculScorePerso: () => {
        let modaldocu = document.getElementById('audithperso');
        let scoredocu = modaldocu.getElementsByClassName('counter-score');
        let numberquestion = scoredocu.length;
        let sum = 0; 

        for (const score of scoredocu) {
        tonNumber = Number(score.textContent)
        sum += tonNumber;
        }
        base = numberquestion*20;
        baseDivisible = base/100;
        total = sum/baseDivisible;
    
        let targetdocu = modaldocu.querySelector('.score-hperso');
        targetdocu.textContent = `${Math.round(total*100)/100}`
        },

    calculScoreLocaux: () => {
        let modaldocu = document.getElementById('auditlocaux');
        let scoredocu = modaldocu.getElementsByClassName('counter-score');
        let numberquestion = scoredocu.length;
        let sum = 0; 

        for (const score of scoredocu) {
        tonNumber = Number(score.textContent)
        sum += tonNumber;
        }
        base = numberquestion*20;
        baseDivisible = base/100;
        total = sum/baseDivisible;
    
        let targetdocu = modaldocu.querySelector('.score-locaux');
        targetdocu.textContent = `${Math.round(total*100)/100}`
        },

    calculScoreTrace: () => {
        let modaldocu = document.getElementById('audittrace');
        let scoredocu = modaldocu.getElementsByClassName('counter-score');
        let numberquestion = scoredocu.length;
        let sum = 0; 

        for (const score of scoredocu) {
        tonNumber = Number(score.textContent)
        sum += tonNumber;
        }
        base = numberquestion*20;
        baseDivisible = base/100;
        total = sum/baseDivisible;
    
        let targetdocu = modaldocu.querySelector('.score-trace');
        targetdocu.textContent = `${Math.round(total*100)/100}`
        },
};    