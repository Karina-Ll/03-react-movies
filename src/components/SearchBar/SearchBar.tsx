import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleAction = (formData: FormData) => {
    const query = formData.get('query')?.toString().trim();
    if (!query) {
      toast.error('Please enter your search query.');
      return;
    }
    onSubmit(query);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <form action={handleAction} className={styles.form}>
          <input className={styles.input} type="text" name="query" placeholder="Search movies..." autoFocus />
          <button className={styles.button} type="submit">Search</button>
        </form>
      </div>
    </header>
  );
}