<?php

// get parameters from request
$req = json_decode($_POST['req']);

unlink("C:\wamp64\www\google_photos_download\images\\" . $req->filename);

echo "finished!";

?>