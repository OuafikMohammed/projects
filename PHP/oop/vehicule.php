<?php

abstract class Vehicule{
    protected $code ;
    protected $nbrPlaces ;
    protected $capacite ;
    public function __construct($code , $nbrPlaces , $capacite)
    {
        $this->$code = $code ;
        $this->$nbrPlaces = $nbrPlaces ;
        $this->$capacite = $capacite ; 
    }
    public function afficher(){
        echo "<br/>";
        echo $this->code ;
        echo "<br/>";
        echo $this->nbrPlaces;
        echo "<br/>";
        echo $this->nbrPlaces;
        /* functions return values instead of echo */
    }
    abstract function total();
} 
class Bateau extends Vehicule {
    private $color ;
    private $prixPlaces ;
    public function __construct($code , $nbrPlaces , $capacite  , $color , $prixPlaces)
    {
        parent::__construct($code , $nbrPlaces ,$capacite);
        $this->color = $color;
        $this->prixPlaces = $prixPlaces;
    }
    public function total(){
        return $this->prixPlaces * $this->nbrPlaces;
    }
}

$bateau = new Bateau("B123", 10, 200, "Blue", 50);
$bateau->afficher();
echo "<br/>Total des Places Réservées: " . $bateau->total();
?>