import React from 'react';

import style from "./Coin.module.css";

const Coin = ({name,price,image,symbol,marketCap,priceChange}) => {
    return (
        <div className={style.container}>
            <img src={image} alt={name} className={style.image} />
            <span className={style.name}>{name}</span>
            <span className={style.symbol}>{symbol.toUpperCase()}</span>
            <span className={style.currentPrice}>$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? style.greenPriceChange : style.redPriceChange}>{priceChange}%</span>
            <span className={style.marketCap}>$ {marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;