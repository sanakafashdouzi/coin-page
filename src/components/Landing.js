import React, { useEffect, useState } from 'react';

//API
import { getCoin } from '../serviers/api';

//component
import Loding from './Loding';
import Coin from './Coin';

import style from "./Landing.module.css";

const Landing = () => {

    const [coins , setCoins] = useState([]);
    const [search , setSearch] = useState("");

   useEffect(() => {
      const fetchAPI = async () => {
        const data = await getCoin();
        setCoins(data)
        console.log(data)
      }
      fetchAPI()
   },[])

   const changeHandeler = event =>{
        setSearch(event.target.value)
   } 

   const searchCoin = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));
  
    return (
        <>
        <div className={style.containerinput}>
          <input type='text' className={style.input} placeholder='Search...' value={search} onChange={changeHandeler} />
        </div>
        { coins.length ?
          <div className={style.coinContainer}>
            {
              searchCoin.map(coin => <Coin
                      key={coin.id}
                      name={coin.name}
                      image={coin.image}
                      symbol={coin.symbol}
                      price={coin.current_price}
                      marketCap={coin.market_cap}
                      priceChange={coin.price_change_percentage_24h}
                   />)
            }
          </div> :
          <Loding />
        }
            

        </>
    );
};

export default Landing;