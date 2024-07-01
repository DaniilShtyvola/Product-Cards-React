import styled from 'styled-components';

interface CardWrapperProps {
    backgroundColor?: 'gold' | 'default';
}

export const CardWrapper = styled.div<CardWrapperProps>`
width: 295px;
padding: 8px;
${({ backgroundColor }) => backgroundColor === 'gold' ? 'background: linear-gradient(to bottom, white, rgb(253, 224, 151)); border: 2px solid rgb(254, 201, 1);' : 'border: 1px solid rgb(213, 213, 213);'}
`;

export const LeftIcons = styled.div`
position: absolute;
font-size: 70%;
`;

export const TopSale = styled.p`
padding: 6px 8px 6px 8px;
background-color: rgb(254, 201, 1);
border-radius: 6px;
color: white;
font-weight: bold;
`;

export const StrangeSymbol = styled.img`
width: 40px;
height: 40px;
`;

export const NewProduct = styled.p`
padding: 6px 8px 6px 8px;
background-color: black;
border-radius: 6px;
color: white;
font-weight: bold;
display: table;
`;

export const ImageContainer = styled.div`
height: 170px;
display: flex;
justify-content: center;
`;

export const ProductImage = styled.img`
height: 100%;
`;

export const RightIconsContainer = styled.div`
display: flex;
justify-content: flex-end;
`;

export const RightIcons = styled.div`
position: absolute;
display: flex;
flex-direction: column;
`;

export const Icon = styled.svg`
stroke: rgb(104, 104, 104);
margin: 8px;
`;

export const HeartIcon = styled(Icon)``;

export const WeightsIcon = styled(Icon)``;

export const Colors = styled.div`
display: flex;
justify-content: center;
gap: 10px;
margin-top: 12px;
`;

export const Color = styled.div`
width: 18px;
height: 18px;
border-radius: 100%;
background-color: red;
`;

export const FirstColor = styled(Color)`
background-color: rgb(255, 236, 206);
border: 2px white solid;
`;

export const SecondColor = styled(Color)`
background-color: rgb(86, 85, 80);
`;

export const ThirdColor = styled(Color)`
background-color: rgb(49, 81, 93);
`;

export const FourthColor = styled(Color)`
background-color: rgb(216, 216, 216);
`;

export const StorageOptions = styled.div`
display: flex;
justify-content: center;
gap: 10px;
margin-top: 4px;
`;

export const StorageOption = styled.p`
color: rgb(129, 121, 95);
border: 1.4px solid rgb(217, 213, 213);
border-radius: 12px;
font-size: 70%;
padding: 0 6px 0 6px;
font-weight: 600;
margin: 0;
`;

export const Description = styled.h4`
margin-top: 4px;
`;

export const Article = styled.span`
font-weight: 600;
font-size: 85%;
color: rgb(130, 130, 130);
`;

export const ResponseIcon = styled.svg`
margin: 4px 4px 0 0;
`;

export const Response = styled.p`
color: rgb(68, 115, 191);
font-weight: 600;
font-size: 90%;
display: flex;
align-items: center;
margin: 0;
`;

export const Cost = styled.p`
font-weight: bold;
margin-top: 6px;
`;

export const OldCost = styled.span`
font-weight: 600;
font-size: 85%;
color: rgb(130, 130, 130);
text-decoration: line-through;
margin-left: 28px;
`;

export const BuyButton = styled.button`
background-color: rgb(59, 115, 198);
color: white;
width: 100%;
padding: 12px;
border-radius: 12px;
border: 0;
font-weight: 700;
`;