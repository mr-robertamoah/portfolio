<?php

namespace App\Enums;

use App\Traits\EnumTrait;

enum ContactTypeEnum: string
{
    use EnumTrait;

    case projectSupport = 'PROJECT_SUPPORT';
    case projectSponsorship = 'PROJECT_SPONSORSHIP';
    case projectSuggestion = 'PROJECT_SUGGESTION';
    case serviceEquiry = 'SERVICE_EQUIRY';
    case serviceRequired = 'SERVICE_REQUIRE';
    case general = 'GENERAL';
}