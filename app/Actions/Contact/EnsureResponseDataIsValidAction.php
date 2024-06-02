<?php

namespace App\Actions\Contact;

use App\Actions\Action;
use App\DTOs\CreateContactDTO;
use App\Exceptions\ContactException;

class EnsureResponseDataIsValidAction extends Action
{
    public function execute(CreateContactDTO $createContactDTO)
    {
        if (
            $createContactDTO->title &&
            $createContactDTO->message
        ) return;

        throw new ContactException("A title and message are required for a response.", 422);
    }
}