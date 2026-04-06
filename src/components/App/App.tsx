import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';
import { fetchMovies } from '../../services/movieService';
import type { Movie } from '../../types/movie';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = async (query: string) => {
    try {
      setIsLoading(true);
      const data = await fetchMovies(query);
      
      if (data.length === 0) {
        toast.error('Нічого не знайдено за цим запитом');
      }
      
      setMovies(data);
    } catch (error) {
      toast.error('Щось пішло не так. Спробуйте пізніше.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearch} />
      
      {isLoading ? (
        <p style={{ textAlign: 'center' }}>Завантаження...</p>
      ) : (
        <MovieGrid movies={movies} onSelect={(movie) => console.log(movie)} />
      )}
    </div>
  );
}