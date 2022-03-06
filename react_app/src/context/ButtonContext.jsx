import { createContext, useContext } from "react";

const ButtonContext = createContext();

export function useButtonContext() {
    return useContext(ButtonContext)
};

export function ButtonContextProvider({children}){
    const value = {
        addButtonText: "追加",
        completeButtonText: "完了",
        deleteButtonText: "削除",
        returnButtonText: "戻す"
    }

    return (
        <ButtonContext.Provider value={value}>
            {children}
        </ButtonContext.Provider>
    );
};
