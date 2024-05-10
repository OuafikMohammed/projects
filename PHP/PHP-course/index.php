<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <?php 
        echo ("Hello World !");
        $phrase = "Hi my name is Ouafik Mohammed !";
        echo $phrase ;
        echo strtolower($phrase);
        echo strtoupper($phrase);
        echo strlen($phrase);
        echo $phrase[0];
        echo str_replace("Giraffe", "Panda" , $phrase ,$count);
        echo substr($phrase , 8);
        echo substr($phrase , 8, 3);
    ?>
</body>
</html>