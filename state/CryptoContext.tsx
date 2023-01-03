import React from "react";
import { createContext, useState, Dispatch } from "react";
import { SetStateAction } from "react";
import axios from "axios";
import { CryptoData } from "../types/types";

interface AppContextInterface {
  /* setDashboardData: Dispatch<SetStateAction<DashboardCryptoItem[]>>;
    
    dashboardData: DashboardCryptoItem[];*/
  getDashboardData: () => void;
  cryptoData: CryptoData[];
  setCryptoData: Dispatch<SetStateAction<CryptoData[]>>;
  isLoading: boolean;
}

const CryptoContext = createContext({} as AppContextInterface);

export const CryptoContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([] as CryptoData[]);
  const [isLoading, setIsLoading] = useState(false);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24h";

  const getDashboardData = (): void => {
    setIsLoading(true);

    axios
      .get(url)
      .then((res) => {
        const rawData = res.data;
        //Uložím jen některé properties z celého objektu.
        const reducedData = rawData.map((item: any) => ({
          id: item.id,
          ticker: item.symbol,
          name: item.name,
          current_price: item.current_price,
          imageURL: item.image,
          ath: item.ath,
          last_updated: item.last_updated,
        }));
        setIsLoading(false);
        setCryptoData(reducedData);
      })
      .catch((err) => {
        setIsLoading(false);

        /* dispatch({ type: SET_ERROR, payload: error.message }); */
      });
  };

  return (
    <CryptoContext.Provider
      value={{
        /* setDashboardData,
          
          dashboardData,*/
        cryptoData,
        setCryptoData,
        isLoading,
        getDashboardData,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
export default CryptoContext;
