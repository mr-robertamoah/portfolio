<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'username' => 'mr_robertamoah',
            'name' => 'Robert Amoah',
            'email' => 'mr_robertamoah@yahoo.com',
            'password' => Hash::make(env('SUPER_PASSWORD', 'password')),
            'email_verified_at' => now(),
        ]);
    }
}
