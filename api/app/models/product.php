<?php
/**
 * Created by PhpStorm.
 * User: darthVader
 * Date: 22-04-18
 * Time: 06.14
 */

namespace MarketPlace\models;

use Illuminate\Database\Eloquent\Model;

class product extends Model
{

    protected $table = 'product';

    protected $fillable = ['name','status','act_price','price_type','price_rate','vat_type','vat_rate','quantity','min_quantity','alert_quantity','pic_url','description'];
}