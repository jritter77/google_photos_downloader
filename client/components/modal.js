class Modal {
    
    constructor() {
        this.container = $(`<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"></div>`);
        
        this.dialog = $(`<div class="modal-dialog"></div>`);
        
        this.content = $(`<div class="modal-content"></div>`);
        
        this.title = $(`<h5 class="modal-title" id="exampleModalLabel"></h5>`);
        
        this.header = $(`<div class="modal-header"></div>`);
        
        this.body = $(`<div class="modal-body"></div>`);
        
        this.footer = $(`<div class="modal-footer"></div>`);   
        
        this.submit = $(`<button type="button" class="btn btn-primary" id="modalSubmit">Submit</button>`);


        this.container.append(this.dialog);
        this.dialog.append(this.content);
        this.content.append(this.header);
        this.content.append(this.body);
        this.content.append(this.footer);

        this.header.append(
            this.title,
            `<button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>`
        );

        this.footer.append(
            this.submit,
            '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
        );

        $('#app').prepend(this.container);

    }

    toggle() {
        this.container.modal('toggle');
    }

}




export {Modal}