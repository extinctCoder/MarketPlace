<?php
namespace MarketPlace\Controller;


class controller
{
    protected $container;

    public function __construct($container)
    {
        $this->container=$container;
    }

    public function __get($poperty)
    {
        if ($this->container->{$poperty}){
            return $this->container->{$poperty};
        }
        return null;
    }
}