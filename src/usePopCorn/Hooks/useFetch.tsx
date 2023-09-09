import { useState, useEffect } from "react";

export const KEY = "df8e05f4";
export const HOSTMOVIE = `http://www.omdbapi.com/?apikey=${KEY}&`;

export function useFetch<Type>(url: string): {
  data: Type | null;
  loading: boolean;
  error: string | null;
  setData: React.Dispatch<React.SetStateAction<Type | null>>;
} {
  const [data, setData] = useState<Type | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(`${HOSTMOVIE}${url}`);

        if (!response.ok) {
          throw new Error("Something went wrong ,Try again");
        }
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, setData, loading, error };
}
