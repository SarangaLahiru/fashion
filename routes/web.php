<?php

use Illuminate\Support\Facades\Route;
use App\http\Controllers\Customercontroller;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/register', function () {
    return view('register');
});
Route::get('/login', function () {
    return view('login');
});
Route::get('/otp', function () {
    return view('otp');
});
Route::get('/home', function () {
    return view('item');
});
Route::get('/item', function () {
    return view('item');
});
Route::post('reg',[Customercontroller::class,'register'])->name('reg');
Route::post('gotp',[Customercontroller::class,'gotp1'])->name('gotp');
Route::post('log',[Customercontroller::class,'log1'])->name('log');
Route::post('cart',[Customercontroller::class,'addcart'])->name('cart');