
import { Form } from "./components/Form";
import { ImageDownloader } from "./components/ImageDownloader";
import { Modal } from "./components/modal";


// basic page for testing
async function Page() {


  const myModal = new Modal();

  // create button for toggling modal and set it's action
  $('#app').append(`<button id="toggleModalButton" class='btn btn-primary'>Toggle Modal</button>`);
  $('#toggleModalButton').click(() => myModal.toggle());


  const downloader = new ImageDownloader();


  myModal.body.append(downloader.form.html);

 

}


Page();
