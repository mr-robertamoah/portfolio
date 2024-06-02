<?php

namespace App\Actions\Contact;

use App\Actions\Action;
use App\DTOs\CreateContactDTO;
use App\Models\Contact;

class CreateContacAction extends Action
{
    public function execute(CreateContactDTO $createContactDTO)
    {
        return Contact::create([
            'name' => $createContactDTO->name,
            'type' => $createContactDTO->type,
            'email' => $createContactDTO->email,
            'phone' => $createContactDTO->phone,
            'data' => $createContactDTO->data ?: [],
            'message' => $createContactDTO->message,
        ]);
    }
}