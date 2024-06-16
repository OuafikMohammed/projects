<?php namespace myArea; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personne Info</title>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container mt-5">
    <div class="card">
        <div class="card-body">
            <?php
            

            class Personne {
                public function myValue(){
                    return "class: " . __CLASS__ . "<br/>" . "method: " . __METHOD__;
                }
                private $nom;
                private $prenom;
                private $age;

                public function __construct($nom, $prenom, $age) {
                    $this->nom = $nom;
                    $this->prenom = $prenom;
                    $this->age = $age;
                }

                public function __get($property) {
                    if (property_exists($this, $property)) {
                        return $this->$property;
                    }
                    return $this;
                }

                public function __set($property, $value) {
                    if (property_exists($this, $property)) {
                        $this->$property = $value;
                    }
                }
                public function __toString()
                {
                    return $this->nom . $this->prenom . $this->age;
                }

                public function __destruct() {
                    echo "Destruct runned ";
                }
            }

            $personne1 = new Personne('OUAFIK', 'MED', 18);
            $personne1->nom = 'MAHFOUD';
            echo "<p>Nom: " . $personne1->nom . "</p>";
            echo "<p>Directory: " . __DIR__ . "</p>";
            echo "<p>Class and Method: " . $personne1->myValue() . "</p>";
            echo "<p>File: " . __FILE__ . "</p>";

            function myValue2() {
                return __FUNCTION__;
            }
            echo "<p>Function: " . myValue2() . "</p>";
            echo "<p>Line: " . __LINE__ . "</p>";

            function myValue3() {
                return __NAMESPACE__;
            }
            echo "<p>Namespace: " . myValue3() . "</p>";

            trait message1 {
                public function msg1() {
                    echo __TRAIT__;
                }
            }

            class Welcome {
                use message1;
            }

            $obj = new Welcome();
            $obj->msg1();
            ?>
        </div>
    </div>
</div>



</body>
</html>
