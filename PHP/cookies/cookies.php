<?php
    /*
    Cookies
    Important
        do not store sensitive information
        not everything saved to cookies
        path '/' means cookies acceced from every path
    */
    setcookie('style[color]' , 'dark' , time() + 60  * 60 * 24 * 30 , "/");
    setcookie('popup', 'done' , strtotime("+1 month"));
    setcookie('style[font]', 'Tahoma' , strtotime("+1 year"));
    echo '<pre>';
    print_r($_COOKIE);
    echo '<pre>';
    if (isset($_COOKIE["style"])){
        echo $_COOKIE["style"]["color"];
    }
?>