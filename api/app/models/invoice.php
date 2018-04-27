<?php
/**
 * Created by PhpStorm.
 * User: darthVader
 * Date: 23-04-18
 * Time: 05.44
 */

namespace MarketPlace\models;


use Illuminate\Database\Eloquent\Model;

class invoice extends Model
{
  protected $table="invoice";

  protected $fillable = [
    'status', 'amount', 'payment_method'
  ];
}
