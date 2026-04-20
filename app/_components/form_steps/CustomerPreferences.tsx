import { useFormContext } from "react-hook-form";
import MultiChoiceInput from "../MultiChoiceInput";
import { useEffect, useState } from "react";

const CustomerPreferences = () => {
  const { register, formState: { errors } } = useFormContext();
  const [randomMovies, setRandomMovies] = useState([]);

  /* 
    BONUS TASK: third party API
    fetch 12 trending movies from a movie database API
    ask user to select movies they like
  */
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("/api/third-party-api");

      if (response.ok) {
        const data = await response.json();

        if (data) {
          const movies = data.movies?.slice(0, 12);

          // set movies state to results
          setRandomMovies(movies.map((movie: {id: number, title: string}) => ({ slug: String(movie.id), title: movie.title })));
        }
      }
    };
    fetchMovies();
  }, []);

  return (
    <fieldset className="mb-6">
      <legend className="step-title">Your Preferences</legend>
      <p className="text-neutral-900 mb-4"></p>
      <div className="mb-6">
        <div className="mb-4">
          <label className="block text-sm sm:text-base text-neutral-900 font-semibold mb-2">
            Favourite Genres <span className="text-neutral-500 text-sm">(Optional)</span>
          </label>
          <p className="text-sm sm:text-base text-neutral-800">Select any of these movie genres. We will use this to customise your movie algorithm.</p>
        </div>
        <MultiChoiceInput 
          type="checkbox"
          name="favouriteGenre"
          options={[
            { slug: "action", title: "Action" },
            { slug: "adventure", title: "Adventure" },
            { slug: "sci-fi", title: "Sci-Fi" },
            { slug: "fantasy", title: "Fantasy" },
            { slug: "horror", title: "Horror" },
            { slug: "crime", title: "Crime" },
            { slug: "drama", title: "Drama" },
            { slug: "thriller", title: "Thriller" },
            { slug: "romance", title: "Romance" },
          ]}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
        />
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <label className="block text-sm sm:text-base text-neutral-900 font-semibold mb-2">
            Do you watch alone or with others? <span className="text-neutral-500 text-sm">(Optional)</span>
          </label>
          <p className="text-sm sm:text-base text-neutral-800 mb-2">Who do you like to enjoy your movie time with?</p>
        </div>
        <MultiChoiceInput 
          type="radio"
          name="watchWith"
          options={[
            { slug: "solo", title: "Solo" },
            { slug: "partner", title: "Partner" },
            { slug: "friends", title: "Friends" },
            { slug: "family", title: "Family" },
          ]}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"
        />
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <label className="block text-sm sm:text-base text-neutral-900 font-semibold mb-2">
            How often do you watch movies? <span className="text-neutral-500 text-sm">(Optional)</span>
          </label>
        </div>
        <MultiChoiceInput 
          type="radio"
          name="watchFrequency"
          options={[
            { slug: "daily", title: "Daily" },
            { slug: "few-a-week", title: "Few time a week" },
            { slug: "weekly", title: "Once a week" },
            { slug: "monthly", title: "Once a month" },
          ]}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"
        />
      </div>
      {randomMovies && (
        <div className="mb-6">
          <div className="mb-4">
            <label className="block text-sm sm:text-base text-neutral-900 font-semibold mb-2">
              Do You Like Any of These Movies? <span className="text-neutral-500 text-sm">(Optional)</span>
            </label>
            <p className="text-sm sm:text-base text-neutral-800">Select any movies you like. We can use these to generate movie suggestions for you.</p>
          </div>
          <MultiChoiceInput 
            type="checkbox"
            name="movies"
            options={randomMovies}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
          />
        </div>
      )}
      <div className="mb-4">
        <label className="flex gap-2 items-center text-sm mb-2">
          <input type="checkbox" {...register('acceptTerms')} className="checkbox" aria-describedby="acceptTerms-error" />
          Accept Terms & Conditions
        </label>
        {errors?.acceptTerms && <p id="acceptTerms-error" className="field-error">{errors.acceptTerms.message as string}</p>}
      </div>
    </fieldset>
  )
}

export default CustomerPreferences