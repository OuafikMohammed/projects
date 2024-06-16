<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <title>MO Blog</title>
</head>
<body>
    <nav class="navbar navbar-expand-lg bg-secondary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Blog</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="index.php">Home
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Politics</a>
                  <a class="dropdown-item" href="#">Sports</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="login.php">Login
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-sm-2" type="search" placeholder="Search">
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
</body>
</html>