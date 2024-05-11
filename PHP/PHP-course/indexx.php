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
        echo 40;// intenger
        echo -40.87;// floating point number = decimal number
        echo 4 + 9;
        echo 4 - 9;
        echo 5.7 * 9;
        echo 10 / 2 ;
        echo 10 % 3 ;// modulo = remainder of division 
        $num = 10;
        $num++ ; // increment by 1
        $num-- ; // decrement by 1
        echo $num ;
        echo abs(-100);
        echo pow(2,4);// puissance
        echo sqrt(144);// racine carrée
        echo max(2 , 10 );
        echo min(2 , 10);
        echo round(3.2);//3
        echo round(3.7);//4
        echo ceil(3.1);
        echo floor(3.9);
    ?>
</body>
</html>