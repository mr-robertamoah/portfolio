<?php

namespace App\DTOs;

use Illuminate\Http\Request;
use MrRobertAmoah\DTO\BaseDTO;

class ContactResponseDTO extends BaseDTO
{
    public ?string $message = null;
    public ?string $title = null;
    public ?string $name = null;
}