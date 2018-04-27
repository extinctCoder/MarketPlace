<?php
/**
 * Created by PhpStorm.
 * User: darthVader
 * Date: 22-04-18
 * Time: 13.54
 */

namespace MarketPlace\models;
use Illuminate\Database\Eloquent\Model;

class entity extends Model
{
  protected $table="entity";

  protected $fillable = [
    'name',	'user_name',	'password',	'pemission',	'type',	'email',	'house_no',	'road_no',	'area',	'city',	'country',	'zip_code'
  ];
}
