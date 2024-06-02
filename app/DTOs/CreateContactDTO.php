<?php

namespace App\DTOs;

use App\Models\Contact;
use App\Models\User;
use Illuminate\Http\Request;
use MrRobertAmoah\DTO\BaseDTO;

class CreateContactDTO extends BaseDTO
{
    public ?User $user = null;
    public ?Contact $contact = null;
    public ?string $name = null;
    public ?string $title = null;
    public ?string $email = null;
    public ?string $phone = null;
    public ?string $message = null;
    public ?string $type = null;
    public ?array $data = [];
}