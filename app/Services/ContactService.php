<?php

namespace App\Services;

use App\Actions\Contact\CreateContacAction;
use App\Actions\Contact\EnsureContactDataIsValidAction;
use App\Actions\Contact\EnsureContactExistsAction;
use App\Actions\Contact\EnsureResponseDataIsValidAction;
use App\Actions\Contact\RespondToContacAction;
use App\Actions\User\EnsureUserExistsAction;
use App\DTOs\CreateContactDTO;
use App\Http\Resources\ContactResource;
use App\Models\Contact;

class ContactService extends Service
{
    public function createContact(CreateContactDTO $createContactDTO) : Contact
    {
        EnsureContactDataIsValidAction::new()->execute($createContactDTO);

        return CreateContacAction::new()->execute($createContactDTO);
    }
    
    public function respondToContact(CreateContactDTO $createContactDTO) : Contact
    {
        EnsureUserExistsAction::new()->execute($createContactDTO);

        EnsureContactExistsAction::new()->execute($createContactDTO);

        EnsureResponseDataIsValidAction::new()->execute($createContactDTO);

        return RespondToContacAction::new()->execute($createContactDTO);
    }
    
    public function getContacts(CreateContactDTO $createContactDTO)
    {
        $query = Contact::query();

        if ($createContactDTO->name)
            $query->whereNameLike($createContactDTO->name);

        if ($createContactDTO->email)
            $query->whereEmailLike($createContactDTO->email);

        if ($createContactDTO->phone)
            $query->wherePhoneLike($createContactDTO->phone);

        if ($createContactDTO->message)
            $query->whereMessageLike($createContactDTO->message);

        return ContactResource::collection($query->paginate(10));
    }
}