<?php

use Illuminate\Support\Facades\Route;





Route::get('admin/{any}', function() {
    return view('admin');
})->where('any', '.*');





Route::get('{any}', function() {
    return view('welcome');
})->where('any', '.*');



Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
