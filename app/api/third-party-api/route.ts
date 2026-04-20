import { NextRequest, NextResponse } from "next/server";

// Optional bonus feature - Third-party API integration
// If you have time really think about what third-party API will make this project stand out

export async function GET() {
  // fetch trending movie from movie database API
  // API key hard coded for this task - would usually use a .env file to store the key
  const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=b97af5ab5f961181bd2536b0e685d36b&page=2");

  if (!response.ok) {
    return NextResponse.json(
      { message: "Couldn't retrieve data from API" },
      { status: 500 }
    );
  }
  
  const data = await response.json();

  const movies = data.results.slice(0, 12);

  return NextResponse.json({ movies: movies }, { status: 200 });
}