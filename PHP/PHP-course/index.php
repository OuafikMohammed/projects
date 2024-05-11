<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <form action="index.php" method="get">
        Name : <input type="text" name="username">
        <input type="submit" value="submit">
        Age : <input type="text" name="age">
        <input type="submit" value="submit">
    </form>
    Your name is <?php echo $_GET["username"] ?>
    <br>
    Your age is <?php echo $_GET["age"] ?>
    <br><br><br>
    <form action="index.php" method="get">
        Color : <input type="text" name="color">
        Plural Noun : <input type="text" name="pluralNoun">
        Celebrity : <input type="text" name="celebrity">
        <input type="submit" value="submit">
    </form>
    <?php
        //$color = $_GET["color"];
        // $pluralNoun = $_GET["pluralNoun"];
        // $celebrity = $_GET["celebrity"];
        // echo "Roses are $color <br>";
        // echo "$pluralNoun are blue <br>";
        // echo "I like it $celebrity <br> <br>"; 
    ?>
    <?php
        $friends = array("Rahmouni" , "Taher" , "Sayadi" , "Haloui");
        echo $friends[2];
        
        echo count($friends);
    ?>
    <form action="index.php" method="post">
        Apples :<input type="checkbox" name="fruits[]" value="apples">
        Oranges :<input type="checkbox" name="fruits[]" value="oranges">
        Pears :<input type="checkbox" name="fruits[]" value="pears">
        <input type="submit">
    </form>
    <?php
        $fruits =$_POST["fruits"];
        echo $fruits[0] ;
        // tableux associatifs
        // fonctions
        function sayHI($name,$age){
            echo "Hello $name , you are $age <br>";
        };
        sayHI("Ouafik",18);
        function cube($num){
            return $num * $num * $num;
        };
        echo cube(4);
    ?>
    <br>
    <?php
        $isMale  = true ;
        $isTall = false;
        if ($isMale && $isTall){#true && true
            echo "You are male";
        } else if ($isMale && $isTall){
            echo "You are a short male";
        }else {
            echo " You are not male";
        }
        // switch case
        // while loop
        //for loop
        $luckynumbers = array(4 , 8 , 14 , 16 , 23 , 24);
        for($i = 0 ; $i< count($luckynumbers) ;$i++){
            echo "$luckynumbers[$i] <br>";
        }
        /*comment like this for a lot of lines */
        // comment for one line
    ?>
</body>
</html>