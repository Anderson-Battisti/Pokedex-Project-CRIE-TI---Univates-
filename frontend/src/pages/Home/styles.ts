import styled from "styled-components";

export const BannerContainer = styled.div`
  height: 37.5rem;
  display: flex;
  flex-direction: column;
    `;

export const BannerTextContainer = styled.div`
    display: flex;
    text-align: center;
    padding-top: 50px;
    align-items: center;

    & h2{
        color: ${(props) => props.theme["red-ball"]};
        font-size: 3.5rem;
    }
` 