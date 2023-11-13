<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="/css/register.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
       
</head>
<body>

    <div class="register">

        <div class="img">
            <img src="/images/img/Untitiled-9.jpg" alt="">
        </div>

        <form action="{{route('reg')}}" method="POST">

            @csrf
            <h2>Sign up</h2>
            <div class="frm-g">
                <label for="" class="a1">Username</label>
                <input class="b1" value="" type="text" name="name">
                @if($errors->has('name'))
                <span>{{$errors->first('name')}}</span>
                @endif
               
            </div>
            <div class="frm-g">
                <label for="" class="a1">Email</label>
                <input class="b1" type="email" name="email">
                 @if($errors->has('email'))
                <span>{{$errors->first('email')}}</span>
                @endif
            </div>
            <div class="frm-g">
                <label for="" class="a1">Password</label>
                <input class="b1" type="password" name="pass">
                 @if($errors->has('pass'))
                <span>{{$errors->first('pass')}}</span>
                @endif
            </div>
            <div class="frm-g">
                <label for="" class="a1">Confirm Password</label>
                <input class="b1" type="password" name="cpass">
                 @if($errors->has('cpass'))
                <span>{{$errors->first('cpass')}}</span>
                @endif
            </div>
            <p>If you already have an account ?<a href="/login">Sign in</a></p>
            
                <input type="submit" value="Sign Up">
            <span>or</span>
            <a href=""><i class="fa-brands fa-google"></i></i>Sign up with Google</a>
            
        </form>
        <div class="ld">
            <i class="fa-solid fa-gear fa-spin"></i>
            <p>Please Wait!</p>
        </div>
    </div>
    
    
    
    
</body>
<script src="/js/register.js"></script>
</html>