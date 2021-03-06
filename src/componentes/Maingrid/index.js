import styled from 'styled-components';

const MainGrid = styled.main`
    width: 100%;
    grid-gap: 100px;
    margin-left: auto;
    margin-right: auto;
    max-width:300px;
    padding: 0px;
    align-content: center
    grid-template-columns: 1fr 1fr 1fr;
    .profileArea {
        display: none;
        @media(min-width: 860px){
            display:block;
        }
    }
    
    @media(min-width: 860px){
        max-width: 1110px;
        align-content: center;
        display: grid;
        grid-template-areas:
        "profileArea welcomeArea profileRelationsArea";
        grid-template-columns: 1fr 1fr 1fr;
    }
`;


export default MainGrid;