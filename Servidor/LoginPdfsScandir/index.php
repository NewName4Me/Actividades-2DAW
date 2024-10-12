<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Register</title>
    <link rel="stylesheet" href="./public/css/indexCSS.css">
</head>

<body>
    <div class="container">
        <!-- Login Form -->
        <div class="form-container">
            <h2>Login</h2>
            <form action="./controller/loginRegisterController.php" method="POST">
                <div class="input-group">
                    <label for="email-login">Name</label>
                    <input type="email" id="email-login" name="email" placeholder="Enter your name">
                </div>
                <div class="input-group">
                    <label for="password-login">Password</label>
                    <input type="password" id="password-login" name="password" placeholder="Enter your password">
                </div>
                <button type="submit" name="login">Login</button>
            </form>
        </div>

        <!-- Register Form -->
        <div class="form-container">
            <h2>Register</h2>
            <form action="./controller/loginRegisterController.php" method="POST">
                <div class="input-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name">
                </div>
                <div class="input-group">
                    <label for="password-register">Password</label>
                    <input type="password" id="password-register" name="password" placeholder="Enter your password">
                </div>
                <div class="input-group">
                    <label for="email-register">Repeat Password</label>
                    <input type="email" id="email-register" name="email" placeholder="Confirm your password">
                </div>
                <button type="submit" name="register">Register</button>
            </form>
        </div>
    </div>
</body>

</html>