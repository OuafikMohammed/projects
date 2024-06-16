<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style2.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title></title>
</head>
<body>
    <?php
    
    class Etudiant{
        //static 
        private $cin;
        var $nom ;
        public $prenom;
        public $age;
        #constructeur
        function __construct($cinx , $nomx , $prenomx ,$agex){    
            $this->cin = $cinx;
            $this->nom = $nomx;
            $this->prenom = $prenomx;
            $this->age = $agex;
        }
        ########################
        ##### ENCAPSULATION ####
        ########################
        // GETTERS
        public function getCIN(){
            return $this->cin;
        }
        // SETTERS
        public function setCIN($nom){
            $this->nom = $nom ;
        }
        public function presentez_vous(){
            return " Je suis $this->cin  $this->prenom ";
        }
    };
    $et1 = new Etudiant("BW5019" , "Ouafik", "Mohammed" , 18);
    echo $et1->getCIN();

    echo "<br>";

    var_dump($et1->getCIN());

    echo "<br>";

    $et1->age = 19;

    echo $et1->age;

    echo "<br>";

    var_dump($et1);

    echo "<br>";
    class Formateur extends Etudiant{
        public $branche ; 
        public $groupes  ;
        public static $anneedu  =  2024; 
        public function __construct($branche , $groupes , $cinx , $nomx , $prenomx ,$agex ){
            parent::__construct($cinx , $nomx , $prenomx ,$agex); 
            $this->branche = $branche;
            $this->groupes = $groupes;
            
        }
        public function presentez_vous(){
            return parent::presentez_vous() . "et je suis un fromateur"; 
        }
    }
    $formateur1 = new Formateur("DD" , [105 , 106], "AD0001" , "Legdani" , "amine" , 25 );
    var_dump($formateur1);
    echo "<br>"; 
    echo $formateur1->groupes ;
    echo "<br>";
    echo Formateur::$anneedu ;
    ?>
</body>
</html>
