<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = [];
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_product', 'product_id', 'category_id');
    }



    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function images()
    {
        return $this->hasOne('App\ProductImage');
    }



}
