"use client";

import React, { createContext, useState } from "react";
import { AppContextType } from "@/types";
import { ProductDT } from "@/types/product-d";

// Define default context value
const defaultContextValue: AppContextType = {
    isMainSidebarOpen: false,
    setMainSidebarOpen: () => { },
    toggleMainSidebar: () => { },

    isSecondarySidebarOpen: false,
    setSecondarySidebarOpen: () => { },
    toggleSecondarySidebar: () => { },

    isSearchModalOpen: false,
    setSearchModalOpen: () => { },
    toggleSearchModal: () => { },

    isMiniCartOpen: false,
    setMiniCartOpen: () => { },
    toggleMiniCart: () => { },

    activeProduct: null,
    setActiveProduct: () => { },
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isMainSidebarOpen, setMainSidebarOpen] = useState<boolean>(false);
    const [isSecondarySidebarOpen, setSecondarySidebarOpen] = useState<boolean>(false);
    const [isMiniCartOpen, setMiniCartOpen] = useState<boolean>(false);
    const [isSearchModalOpen, setSearchModalOpen] = useState<boolean>(false);
    const [activeProduct, setActiveProduct] = useState<ProductDT | null>(null);

    const contextValue: AppContextType = {
        isMainSidebarOpen,
        setMainSidebarOpen,
        toggleMainSidebar: () => setMainSidebarOpen(prev => !prev),

        isSecondarySidebarOpen,
        setSecondarySidebarOpen,
        toggleSecondarySidebar: () => setSecondarySidebarOpen(prev => !prev),

        isMiniCartOpen,
        setMiniCartOpen,
        toggleMiniCart: () => setMiniCartOpen(prev => !prev),

        isSearchModalOpen,
        setSearchModalOpen,
        toggleSearchModal: () => setSearchModalOpen(prev => !prev),

        activeProduct,
        setActiveProduct,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;