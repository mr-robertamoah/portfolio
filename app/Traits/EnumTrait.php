<?php

namespace App\Traits;

trait EnumTrait
{
    public static function values()
    {
        return array_map(function ($value) {
            return $value->value;
        }, static::cases());
    }
}