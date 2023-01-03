import { useContext } from "react";
import CryptoContext from "../state/CryptoContext";
import { CryptoData } from "../types/types";
import Select from "react-select";

const CryptoSelect: React.FC<{ imgURL: any }> = ({ imgURL }) => {
  const cryptoContext = useContext(CryptoContext);

  const { cryptoData } = cryptoContext;

  const onSelectCrypto = (e: any) => {
    //URL vybraného obrázku
    imgURL(String(e.label.props.children[0].props.src));
  };

  //Basic custom styles pro Select component
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      background: "#cbd5e1",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      background: state.isSelected ? "#319795" : "white",
    }),
  };

  return (
    <div>
      <Select
        styles={customStyles}
        options={cryptoData.map((crypto: CryptoData) => {
          return {
            label: (
              <div className="flex">
                <img
                  src={crypto.imageURL}
                  width="25px"
                  height="20px"
                  className="mr-2"
                />
                {crypto.name}
              </div>
            ),
            value: crypto.name,
          };
        })}
        onChange={onSelectCrypto}
      />
    </div>
  );
};

export default CryptoSelect;
