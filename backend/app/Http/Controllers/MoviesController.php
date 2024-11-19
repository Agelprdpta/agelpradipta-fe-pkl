<?php

namespace App\Http\Controllers;

use App\Models\Movies;
use Illuminate\Http\Request;

class MoviesController extends Controller
{
    public function index()
    {
        return response()->json(Movies::all(), 200);
    }

    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        // Simpan data ke database
        $movies = Movies::create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
        ]);

        return response()->json([
            'message' => 'Movie created successfully',
            'data' => $movie,
        ], 201);
    }

public function show($id)
{
    return Movie::findOrFail($id);
}

public function update(Request $request, $id)
{
    $movie = Movie::findOrFail($id);
    $movie->update($request->all());
    return response()->json($movie, 200);
}

public function destroy($id)
{
    Movie::destroy($id);
    return response()->json(['message' => 'Movie deleted'], 200);
}

}
