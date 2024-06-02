<?php

namespace App\Actions\User;

use App\Actions\Action;
use MrRobertAmoah\DTO\BaseDTO;

class EnsureUserExistsAction extends Action
{
    public function execute(BaseDTO $baseDTO)
    {
        if (
            property_exists($baseDTO, 'user') &&
            $baseDTO->user
        ) return;

        throw new \Exception("User was not found.", 422);
    }
}