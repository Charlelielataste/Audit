const pdfModule = {
    
    export: () => {

        const btns = document.querySelectorAll(".button");
        for (const btn of btns) {
            btn.classList.add("is-hidden");
        }

        const notation = document.querySelector("#rule");
        notation.classList.remove("is-hidden");

        const button = document.querySelector('#pdf-btn-back');
        button.classList.remove("is-hidden");

        window.print();
        
    
        },

        cancel: () => {

            const btns = document.querySelectorAll(".return");
            for (const btn of btns) {
                btn.classList.remove("is-hidden");
            }
    
            const notation = document.querySelector("#rule");
            notation.classList.add("is-hidden");
    
            const button = document.querySelector('#pdf-btn-back');
            button.classList.add("is-hidden");
            
        
            },

}