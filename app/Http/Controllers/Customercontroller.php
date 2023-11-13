<?php

namespace App\Http\Controllers;
use App\Models\customer;
use Illuminate\Http\Request;
use Session;
use DB;
use Illuminate\Support\Facades\Schema;

class Customercontroller extends Controller
{
    public function register(Request $request){
        $request->validate([
            'name'=>'required',
            'email'=>'required',
            'pass'=>'required|min:8',
            'cpass'=>'required',
        ]);

        $otp=rand(1,9999);

        $user=new customer();

        $user->name=$request->name;
        $user->email=$request->email;
        $user->password=$request->pass;
        $user->otp=$otp;
         $dis=$user->save();

         if($dis){

             Session::put('cname',$user->name);
             Session::put('cemail',$user->email);
              Session::put('cpass',$user->password);

              Schema::connection('mysql')->create($user->name,function($table){
            $table->increments('id');
            $table->String('items');
            $table->String('total');
            
             });

             

             return redirect('/otp');

         }
         else{
             echo "something went wrong";
         }


    }

    public function gotp1(Request $request){

       

        $otp=DB::table('customers')
                 ->where('name','=',Session::get('cname'))->value('otp');

                 if($request->num1==$otp[0] && $request->num2==$otp[1] &&$request->num3==$otp[2] && $request->num4==$otp[3]   ){

                    Session::put('success','your are registered succesfully');
                    return redirect('/');
                 }
                 else{
                    return redirect()->back()->with('error',"Something went wrong!");
                 }
    
    
    

    }

    public function log1(Request $request){
        $request->validate([
            
            'email'=>'required',
            'pass'=>'required|min:8',


           
        ]);

        $user= new customer();
        $data=customer::where('email','=',$request->email)->first();

       

        if($data){

            

            if($data->password==$request->pass){

             Session::put('cname',$data->name);
             Session::put('cemail',$data->email);
             Session::put('cpass',$data->pass);

             return redirect('/');


            }
            else{
              
           return redirect()->back()->with('error','Invalid password or email');
        }

            
        
        }

        else{
            return redirect()->back()->with('error','Invalid password or email');
        }

    }
    public function addcart(Request $request){ 
        
        DB::table(Session::get('cname'))->insert([
           'items' => $request->item,
           'total' => $request->price*$request->count
       ]);
       return redirect('/');
          
        

       

    }

}
