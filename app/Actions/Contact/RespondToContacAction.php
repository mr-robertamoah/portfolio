<?php

namespace App\Actions\Contact;

use App\Actions\Action;
use App\DTOs\ContactResponseDTO;
use App\DTOs\CreateContactDTO;
use App\Mail\ContactResponseMail;
use Illuminate\Support\Facades\Mail;

class RespondToContacAction extends Action
{
    public function execute(CreateContactDTO $createContactDTO)
    {
        if ($createContactDTO->contact->email)
            Mail::to($createContactDTO->contact->email)->send(
                new ContactResponseMail(
                [
                        'title' => $createContactDTO->title,
                        'message' => $createContactDTO->message,
                        'name' => $createContactDTO->contact->name,
                    ])
            );

        return $createContactDTO->contact;
    }
}