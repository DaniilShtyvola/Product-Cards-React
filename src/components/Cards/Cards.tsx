import React, { FC } from 'react';
import { CardsWrapper } from './Cards.styled';
import Card from '../Card/Card';

interface CardsProps {}

const Cards: FC<CardsProps> = () => (
 <CardsWrapper>
    <Card
      newCost="60 999 грн"
      oldCost="68 999 грн"
      description="Apple Iphone 15 Pro 1 Тб Natural Titanium eSIM"
      imageUrl="https://www.istore.ua/upload/iblock/9b9/m1kmgez4ctnxf3616hfyxh2yy0p3llqt/15_pro_natur_titan_4_is-kopiya.png"
      article='MTU53'
      backgroundColor='gold'
    />
    <Card
      newCost="40 599 грн"
      oldCost="68 999 грн"
      description="Apple Iphone 15 Pro 128 ГБ White Titanium"
      imageUrl="https://www.istore.ua/upload/iblock/9b9/m1kmgez4ctnxf3616hfyxh2yy0p3llqt/15_pro_natur_titan_4_is-kopiya.png"
      article='MTUW3'
    />
 </CardsWrapper>
);

export default Cards;
