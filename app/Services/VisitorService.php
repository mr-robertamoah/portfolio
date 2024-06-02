<?php

namespace App\Services;

use App\Models\User;
use App\Models\Visitor;

class VisitorService extends Service
{
    public function storeVisitor(?User $user, ?string $ipAddress)
    {
        Visitor::updateOrCreate([
            'user_id' => $user?->id,
            'ip_address' => $ipAddress,
        ]);
    }
}