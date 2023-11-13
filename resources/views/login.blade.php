<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign in</title>
    <link rel="stylesheet" href="/css/register.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

</head>
<body>

    <div class="register">

        <div class="img">
            <img src="/images/img/Untitiled-9.jpg" alt="">
        </div>

        <form action="{{route('log')}}" method="POST">

            @csrf
            <h2>Sign in</h2>
           
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
           
            <p>If you don't have an account ?<a href="/register">Sign up</a></p>
            
                <input type="submit" value="Sign in">
           
            
        </form>
        <div class="ld">
            <i class="fa-solid fa-gear fa-spin"></i>
            <p>Please Wait!</p>
        </div>
    </div>
     @if(Session::has('error'))
        <script>
            swal("error","{{Session::get('error')}}",'error',{
                button:true,
                button:"ok",
                timer:3000,
            });
        </script>
        @endif
    
    
</body>
<script src="/js/register.js"></script>
</html>