import { Form } from "./Form";
import { deleteImg, downloadImg } from "../models/imageHandling";

/*
    Creates a form component that can download an image from google photos to the server.
    Simply past the image url into the input field and then click the upload button.
    A preview of the uploaded photos will be displayed below the component.
    Click a preview to remove the image and delete it from server.
*/


class ImageDownloader {

    constructor() {

        // Holds the filenames of all currently uploaded images
        this.images = [];

        // Main form element
        this.form = new Form();

        // Create upload button
        this.upload = $('<button class="btn btn-primary">Upload</button>');
        this.upload.click(e => this.uploadHandler(e));
        this.form.html.append(this.upload);

        // Create URL field
        this.url = this.form.addField('imageURL', 'Image URL:');

        // Create container to hold uploaded image previews
        this.uploaded = $('<div></div>');
        this.form.html.append(this.uploaded);

    }

    // Uploads the image of the current url to the server
    async uploadHandler(e) {
        e.preventDefault();

        // Get img URL from input element
        const url = this.url.val();

        // Exit if URL is blank
        if (!url) {
            return;
        }

        // Extract filename from google photos URL
        const name = url.substring(url.lastIndexOf('/')+1, url.indexOf('=')-1);

        // Await result from PHP
        const result = await downloadImg(name, url);
        
        // If PHP was successful, add filename to images array and reload image previews. 
        if (result === 'success') {
            this.images.push(name + '.jpg');
            this.displayUploaded();
        }
        else {
            alert('File was not able to be uploaded. Please check URL and try again.');
        }
        
    }


    // Removes image from current uploaded and from the server
    async removeImage(e) {

        // Get source URL
        const src = e.target.src;

        // Extract filename from source URL
        const filename = src.substring(src.lastIndexOf('/') + 1);

        // Await PHP
        await deleteImg(filename);

        // Remove image from uploaded array
        this.images.splice(this.images.indexOf(filename), 1);

        // Refresh image previews
        this.displayUploaded();
    }


    // Sets images array to passed image array, then refreshes previews
    setUploaded(images) {
        this.images = images;
        this.displayUploaded();
    }


    // Refreshes the previews for currently uploaded images
    displayUploaded() {

        // Clear current html
        this.uploaded.html('');

        // Set image elements for all current uploaded images
        for (let image of this.images) {
            const img = $(`<img class="img-thumbnail" style="width:128px;height:128px" src='./images/${image}'>`);
            img.click(e => this.removeImage(e));
            this.uploaded.append(img);

        }
    }
}

export {ImageDownloader}