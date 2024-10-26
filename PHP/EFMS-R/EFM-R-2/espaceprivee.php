<?php 
session_start();

if(!isset($_SESSION['loginAdmin'])){
    header("Location: loginClt.php");
    exit;
}