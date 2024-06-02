<?php

namespace App\Actions\Contact;

use App\Actions\Action;
use App\DTOs\CreateContactDTO;
use App\Enums\ContactTypeEnum;
use App\Exceptions\ContactException;
use App\Models\Contact;

class EnsureContactDataIsValidAction extends Action
{
    public function execute(CreateContactDTO $createContactDTO)
    {
        if (
            is_null($createContactDTO->type) ||
            !in_array($createContactDTO->type, ContactTypeEnum::values())
        ) throw new ContactException("The contact type is either not provided or is invalid.", 422);

        if (
            $createContactDTO->name &&
            $createContactDTO->message &&
            (
                $createContactDTO->email ||
                $createContactDTO->phone
            )
        ) return;
        
        throw new ContactException("Enough data was not provided for contacting Robert Amoah.", 422);
    }
}