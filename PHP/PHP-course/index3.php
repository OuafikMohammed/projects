<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php include  "header.html" ?>
    <p>Hello World</p>
    <?php include "footer.html"  ?>
    <br>
    <?php
        class Book{
            #attributes
            var $title;
            var $author;
            var $pages;
            function __construct($aTitle , $aAuthor , $aPages)
            {
                $this->title = $aTitle;
                $this->author = $aAuthor;
                $this->pages = $aPages;
            }
        }
        # obj is instance of a class
        $book1 = new Book("Harry Pother", "JK Rowling" , 400);
        $book1->title = "Harry Pother";
        $book1->author = 'JK Rowling';
        $book1->pages  = 400;
        echo "<br>";
        echo $book1->author;
        echo "<br>";
        $book2 = new Book("Lord of the Rings",'  Tolkien',700);
        $book2->title = "Lord of the Rings";
        $book2->author = '  Tolkien';
        $book2->pages  = 700;
        echo "<br>";
        echo $book2->author;
    ?>
</body>
</html>