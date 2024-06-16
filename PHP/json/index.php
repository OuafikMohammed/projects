<?php 
    header('Content-Type : application/json');

    $json = file_get_contents('php://input');

    $data = json_decode($json , true);

   if ($data === null ){
    echo json_encode(['error' => 'Invalid JSON'] );
   }
?>