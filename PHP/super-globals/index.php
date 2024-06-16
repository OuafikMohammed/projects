<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    
    $posts = [
        ["id"=>"1","contenu"=>"Am Am Am","tags"=>"[]"],
        ["id"=>"2","contenu"=>"Am Am Am Am","tags"=>"[]"],
        ["id"=>"3","contenu"=>"Am Am Am Am Am","tags"=>"[]"],
    ];
    
    if (isset($_GET['id'])){
        $posts = array_filter($posts , function ($item){
        return $item['id'] == $_GET['id'];
        });//; !important
    }
?>
<div class="container">
    <div class="row mb-4">
    <?php foreach($posts as $post) : ?>
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card hover-lift hover-shadow-xl shadow-sm border-0">
                <!--card-body-->
                <div class="card-body p-4">
                    <div class="d-flex mb-4 align-items-center">

                        <!--Companies group-->
                        <div class="flex-grow-1 d-flex align-items-center">
                            <!--Campany-->
                            <div class="width-5x height-5x p-2 bg-white shadow-sm position-relative flex-center rounded-circle border">
                                
                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="img-fluid" alt="">
                            </div>
                            <!--Campany-->
                            <div class="width-5x height-5x p-2 ms-n3 bg-white shadow-sm position-relative flex-center rounded-circle border">
                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="img-fluid" alt="">
                            </div>
                            <!--Campany-->
                            <div class="width-5x height-5x p-2 ms-n3 bg-white shadow-sm position-relative flex-center rounded-circle border">
                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" class="img-fluid" alt="">
                            </div>
                        </div>
                    </div>
                    <h5>Content Creator</h5>
                    <p class="mb-0 text-muted">7 Jobs opportunities</p>
                    <h1><?php echo $post["contenu"];?></h1>
                </div>
                <!--link-->
                <a href="#!" class="stretched-link"></a>
            </div>
        </div>
    <?php   endforeach; ?>
</body>
</html>

