class Form {

    constructor() {
        this.html = $('<form></form>');
        this.fields = {};
    }

    addField(id, name, type='text', placeholder='') {
        const group = $(`<div class='form-group'></div>`);
        const label = $(`<label for=${id}>${name}</label>`);
        const input = $(`<input id=${id} class='form-control' type=${type} placeholder=${placeholder}>`);

        group.append(label, input);

        this.fields[id] = {field: group, input: input}
        this.html.append(group);

        return input;
    }

    


}

export {Form}