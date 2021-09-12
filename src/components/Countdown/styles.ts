import shade from "polished/lib/color/shade";
import styled from "styled-components";
import mixins from "../../styles/mixins";

export const CountdownContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Rajdhani';
    font-weight: 600;
    color: ${mixins.colors.title};
`

export const CountdownArea = styled.div`
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${mixins.colors.white};
    box-shadow: 0 0 68px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size:  8.5rem;
    text-align: center;
`

export const CountdownNumber = styled.div`
    flex: 1;
`
export const CountdownNumberPoints = styled.span`
    font-size: 6.25rem;
    margin:  0 0.5rem;
`


export const CountdownNumberFirst = styled.span`
    flex: 1;
    border-right: 1px solid #f0f1f3;
`

export const CountdownNumberSecond = styled.span`
    flex: 1;
    border-left: 1px solid #f0f1f3;
`

export const CountdownButton = styled.button`
    width: 100%;
    height: 5rem;
    
    margin-top: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    background: ${mixins.colors.blue};
    color: ${mixins.colors.white};

    font-size: 1.25rem;
    font-weight: 600;

    transition: background-color 1.2s ease;
    
    &:hover{
        color: ${mixins.colors.white};
        background: ${mixins.colors.blueDark};
    }
`

export const CountdownButtonRest = styled(CountdownButton)`
    border: 5px solid ${mixins.colors.blue};
    background: ${mixins.colors.white};
    color: ${mixins.colors.blue};
    border-radius: 5px;

    transition: border 0.2s ease;
    transition:  background-color 1.2s ease;
    &:hover{
        border:  5px solid ${mixins.colors.blueDark};
        color: ${mixins.colors.blueDark};
        background: ${shade(0.1,mixins.colors.white)};
    }
`