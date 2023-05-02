class Modal {
    constructor(title, text){
        this.modal = document.querySelector(".js-modal")
        if(title !== undefined){
            this.modal.querySelector(".js-modal-title").innerText = title
        };
}
    open(){
    this.modal.style.display = "initial"
    
    };
}
    close();{
    this.modal.style.display = "none";
    
    changeContent(title, text);{
        if(title !== undefined){
            this.modal.querySelector(".js-modal-title").innerText = title
        }
        if(text !== undefined){
            this.modal.querySelector(".js-modal-text").innerText = text
            }
        }
    }



const openBtn = document.querySelector(".js-open-btn");
const closeBtn = document.querySelector(".js-close-btn");
const modal = new Modal("New title", "New text in here")

openBtn.addEventListener("click", function(event){
    modal.style.display = "intial";
})

closeBtn.addEventListener("click", function(event){
    modal.style.display = "none";
})

