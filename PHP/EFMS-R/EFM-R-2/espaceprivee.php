<?php 
session_start();
var_dump($_SESSION['loginAdmin']);
die;
if(!isset($_SESSION['loginAdmin'])){
    header("Location: loginClt.php");
    exit;
}