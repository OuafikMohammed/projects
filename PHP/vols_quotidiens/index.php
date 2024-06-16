<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <?php
        $host = 'localhost';
        $port = 3306;
        $dbName = 'Vols_Quotidiens';
        $user = 'root';
        $password = '';
        $dsn = "mysql:host={$host};port={$port};dbname={$dbName};charset=utf8"; 
        try{
            $pdo = new PDO($dsn  ,$user , $password);
            echo "connected successfully ";
        }catch(PDOException $e){
            echo "connection failed :" . $e->getMessage();
        }
    ?>
</form>
</body>
</html>