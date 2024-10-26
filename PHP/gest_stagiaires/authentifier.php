<?php 
session_start();
$loginError = '';
if(isset($_SESSION['loginError'])){
    $loginError = $_SESSION['loginError'];
}
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authentifier</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1 class="text-center">Authentification</h1>
        <form action="verification.php" method="post">
            <div class="form-group">
                <label for="loginAdmin">Login</label>
                <input type="text" name="loginAdmin" class="form-control">
            </div>
            <div class="form-group">
                <label for="motPasse">Mot de Passe</label>
                <input type="password" name="motPasse" class="form-control">
                <span class="text-danger"><?= $loginError?></span>
            </div>
            <div class="form-group">
                <input type="submit" value="S'authentifier" class="btn btn-primary">
            </div>
        </form>
    </div>
</body>
</html>