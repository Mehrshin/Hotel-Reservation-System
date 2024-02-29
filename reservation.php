<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = test_input($_POST["inputFirstName"]);
    $lastName = test_input($_POST["inputLastName"]);
    $phone = test_input($_POST["inputPhone"]);
    $email = test_input($_POST["inputEmail"]);
 } 

 function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
    ?>
</body>
</html>