import { useState, useEffect, useCallback } from "react";
import { api } from "../services/api";

function useCategories() {
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategories = useCallback(() => {
    setLoading(true);
    api
      .get(`api_category.php`) // a url ja esta na base
      .then((response) => response.data.trivia_categories)
      .then(setCategories)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return [categories, loading, error, { getCategories }];
}

export default useCategories;
