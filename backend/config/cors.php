<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'], // Izinkan akses ke semua endpoint API
    'allowed_methods' => ['*'], // Izinkan semua metode HTTP (GET, POST, dll.)
    'allowed_origins' => ['http://localhost:5173'], // Izinkan semua origin (atau bisa spesifik ke 'http://localhost:5173')
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'], // Izinkan semua header
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
