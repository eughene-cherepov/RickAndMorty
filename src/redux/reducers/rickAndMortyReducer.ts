const initialState = {
  allCharacters: [],
  charactersLoading: false,
};

export const rickAndMortyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "UPLOAD_ALL_CHARACTERS_REQUEST":
      return {
        ...state,
        charactersLoading: true,
      };
    case "UPLOAD_ALL_CHARACTERS":
      return {
        ...state,
        allCharacters: action.payload,
        charactersLoading: false,
      };
    case "LOAD_MORE_CHARACTERS":
      return {
        ...state,
        allCharacters: [...state.allCharacters, ...action.payload],
        charactersLoading: false,
      };
    default:
      return state;
  }
};
