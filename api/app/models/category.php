<?php
/**
 * Created by PhpStorm.
 * User: darthVader
 * Date: 23-04-18
 * Time: 05.44
 */

namespace MarketPlace\models;


use Illuminate\Database\Eloquent\Model;

class category extends Model
{
  protected $table="category";

  protected $fillable = [
    'name', 'description'
  ];
}
