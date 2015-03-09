<?php 
$files = array();

$dir = opendir('../img/photos');
while ($file = readdir($dir)) {
    if ($file == '.' || $file == '..') {
        continue;
    }
    $files[] = exif_read_data('../img/photos/'.$file);
}
header('Content-type: application/json');
echo json_encode($files);
?>