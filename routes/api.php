<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', 'AuthController@register');
Route::post('/logout', 'AuthController@logout')->middleware('auth:api');

Route::resource('/products', 'ProductController');
Route::resource('/featured-products', 'FeaturedProductController');
Route::get('/featured-products/get/{limit}', 'FeaturedProductController@fetch');

$dictionaries =
    "Stint Of Involuntary Celibacy  Belief Obvious Contrary 
     ironic  bragging   perceived  inadequacy  inferior   
     Irresistible Instinctively tremendous compensate inadequate ruffled dreadful creature  
       indicative curious curiosity  subtle titillating luscious  offspring fertility  
      fertility infertility fertile reproductive menacing menacing swaggers  infant vulnerable 
      intense supplicate  sorority a social club for female undergraduate
       FRAT a social club for male undergraduate
       Associating  exaggerate   exaggerate exaggerate  abundance  competencies 
       obfuscate indifferent  vulnerabilities    ";


//Route::middleware('auth:api')->post('/user', function (Request $request) {
//
//    $user = $request->user();
//
//    return $user;
//});


