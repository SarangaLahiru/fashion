<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>otp</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="/css/otp.css">
         <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" integrity="sha512-AA1Bzp5Q0K1KanKKmvN/4d3IRKVlv9PYgwFPvm32nPO6QS8yH1HO7LbgB1pgiOxPtfeg5zEn2ba64MUcqJx6CA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>
    <div id="otp">
    
        <div class="box">
            <h2>Enter you OTP</h2>
         @if(Session::has('error'))
            <span>{{Session::get('error')}}</span>
            @endif
            <form action="{{route('gotp')}}" method="post">
            
            @csrf

                <input class="c1" type="text" name="num1">
                <input class="c1" type="text" name="num2">
                <input class="c1" type="text" name="num3">
                <input class="c1" type="text" name="num4">
    
                <input type="submit" value="SUBMIT">
            </form>
    
        </div>
    
    </div>
    <div class="ld">
        <i class="fa-solid fa-gear fa-spin"></i>
        <p>Please Wait!</p>
    </div>
   

      
</body>
  <script src="/js/otp.js"></script>
</html>