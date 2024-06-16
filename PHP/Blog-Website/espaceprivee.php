
<?php 
session_start();
require('database.php');


// ! verification de l authentification d admin
// on peut pas acceder a au espaceprive sans avoir une session loginadmin c-a-d qui est l'admin
// quand y ' as pas de session le meme lien nous redirige vers la page du login authentifier
if (isset($_SESSION['loginAdmin'])) {
    header("Location: espaceprivee.php");
    exit;
}


$user_id = $_GET['id'];

// Get the user's profile information
$stmt = $pdo->prepare("SELECT * FROM userx WHERE user_id = ?");
$stmt->execute([$user_id]);
$user_profile = $stmt->fetch(PDO::FETCH_ASSOC);

// Display the profile part
?>
<html>
<head>
    <title>Espace Privée</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .profile {
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .blog {
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <form action="id.php">
        <input type="hidden" name="id">
    </form>
    <?php
    // Get the current user's ID
    
    if ($user_profile): ?>
        <div class="profile">
            <h2>Profile</h2>
            <p>Username: <?php echo htmlspecialchars($user_profile['username']); ?></p>
            <p>Email: <?php  htmlspecialchars($user_profile['email']); ?></p>
        </div>
    <?php endif; ?>
    <h2>My Blogs</h2>
    <?php
    // Get the user's blogs
    $stmt = $pdo->prepare("SELECT * FROM blog WHERE author_id = ?");
    $stmt->execute([$user_id]);
    $blogs = $stmt->fetchAll();

    foreach ($blogs as $blog) {
        ?>
        <div class="blog">
            <h3><?php echo $blog['blog_title']; ?></h3>
            <p><?php echo $blog['blog_body']; ?></p>
            <img src="<?php echo $blog['blog_image']; ?>" alt="<?php echo $blog['blog_title']; ?>">
            <p>Created on: <?php echo $blog['publish_date']; ?></p>
            <button>Like</button>
            <button>Dislike</button>
        </div>
        <?php
    }
    ?>

    <h2>Home Feed</h2>
    <?php
    // Get all blogs from other users
    $stmt = $pdo->prepare("SELECT * FROM blog WHERE author_id != ?");
    $stmt->execute([$user_id]);
    $home_feed = $stmt->fetchAll();

    foreach ($home_feed as $blog) {
        ?>
        <div class="blog">
            <h3><?php echo $blog['blog_title']; ?></h3>
            <p><?php echo $blog['blog_body']; ?></p>
            <img src="<?php echo $blog['blog_image']; ?>" alt="<?php echo $blog['blog_title']; ?>">
            <p>Created on: <?php echo $blog['publish_date']; ?></p>
            <button>Like</button>
            <button>Dislike</button>
        </div>
        <?php
    }
    ?>
</body>
</html>
