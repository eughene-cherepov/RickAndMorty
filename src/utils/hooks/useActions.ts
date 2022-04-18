import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const useActions = () => {
  const dispatch = useDispatch();

  const allCharacters = useSelector<any, any[]>(
    (state: any) => state.rickMorty.allCharacters
  );

  const charactersLoading = useSelector<any>(
    (state: any) => state.rickMorty.charactersLoading
  );

  const loadInitialCharacters = (): void => {
    dispatch({ type: "LOAD_ALL_CHARACTERS_REQUESTED", payload: { page: 1 } });
  };

  const loadMoreCharacters = (page: number): void => {
    dispatch({ type: "LOAD_NEXT_PAGE", payload: { page: page } });
  };

  useEffect(() => {
    loadInitialCharacters();
  }, []);

  return {
    allCharacters,
    charactersLoading,
    loadInitialCharacters,
    loadMoreCharacters,
  };
};
