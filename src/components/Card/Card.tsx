import React, { FC } from 'react';
import { BuyButton, Cost, OldCost, ResponseIcon, Response, Description, Article, StorageOptions, StorageOption, FirstColor, SecondColor, ThirdColor, FourthColor, Colors, RightIconsContainer, WeightsIcon, RightIcons, HeartIcon, ProductImage, CardWrapper, LeftIcons, TopSale, StrangeSymbol, NewProduct, ImageContainer } from './Card.styled';

interface CardProps {
   newCost: string;
   oldCost: string;
   description: string;
   imageUrl: string;
   article: string;
   backgroundColor?: 'gold' | 'default';
}

const GoldCard:FC<CardProps> = ({ newCost, oldCost, description, imageUrl, article, backgroundColor }) => (
   <CardWrapper backgroundColor={backgroundColor}>
      <LeftIcons>
         <TopSale>Топ продажу</TopSale>
         <StrangeSymbol src="https://www.istore.ua/upload/iblock/374/xek8is9ql6g83jqo02r5s6ey2vwc9n27/50e50.png"></StrangeSymbol>
         <NewProduct>Новинка</NewProduct>
      </LeftIcons>
      <RightIconsContainer>
         <RightIcons>
            <HeartIcon width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M10 18.523L9.33593 17.8012L9.31519 17.7787L9.29311 17.7574C6.67759 15.2425 4.59054 13.2072 3.14763 11.299C1.71786 9.4082 1 7.74253 1 5.97826C1 3.08085 3.02915 1 5.5 1C6.86864 1 8.28584 1.70856 9.21091 2.89689L10 3.91054L10.7891 2.89689C11.7142 1.70856 13.1314 1 14.5 1C16.9709 1 19 3.08085 19 5.97826C19 7.74253 18.2821 9.4082 16.8524 11.299C15.4095 13.2072 13.3224 15.2425 10.7069 17.7574L10.6848 17.7787L10.6641 17.8012L10 18.523Z" stroke-width="2" stroke-linecap="round"></path>
            </HeartIcon>
            <WeightsIcon width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M17.8636 5.63423L18.6907 8.66665L16.761 8.66665L17.8636 5.63423Z" stroke-width="2" stroke-linecap="round"></path>
               <path d="M2.53039 12.9676L3.35742 16H1.4277L2.53039 12.9676Z" stroke-width="2" stroke-linecap="round"></path>
               <path d="M1.33325 9.66669L17.9999 1.66669" stroke-width="2" stroke-linecap="round"></path>
               <path d="M10 4.33337V19.6667" stroke-width="2" stroke-linecap="round"></path>
               <path d="M4 19.6667H15.3333" stroke-width="2" stroke-linecap="round"></path>
            </WeightsIcon>
         </RightIcons>
      </RightIconsContainer>
      <ImageContainer>
         <ProductImage src={imageUrl}></ProductImage>
      </ImageContainer>
      <Colors>
         <FirstColor></FirstColor>
         <SecondColor></SecondColor>
         <ThirdColor></ThirdColor>
         <FourthColor></FourthColor>
      </Colors>
      <StorageOptions>
         <StorageOption>128 Гб</StorageOption>
         <StorageOption>256 Гб</StorageOption>
         <StorageOption>512 Гб</StorageOption>
         <StorageOption>1 Тб</StorageOption>
      </StorageOptions>
      <Description>{description}<Article>{article}</Article></Description>
      <Response>
         <ResponseIcon width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 11.5H2.79289L2.64645 11.6464L0.5 13.7929V1.5C0.5 0.951142 0.951142 0.5 1.5 0.5H13.5C14.0489 0.5 14.5 0.951142 14.5 1.5V10.5C14.5 11.0489 14.0489 11.5 13.5 11.5H3Z" stroke="#808080"></path>
         </ResponseIcon>
         Залишити відгук
      </Response>
      <Cost>{newCost} грн<OldCost>{oldCost} грн</OldCost></Cost>
      <BuyButton>Купити</BuyButton>
   </CardWrapper>
);

export default GoldCard;


