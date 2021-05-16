import styled from 'styled-components';

export const MusicH1 = styled.div`
    font-size: 2.0rem;
    margin-left: 2.5rem;
    margin-bottom: 1.0rem;
    meargin-top: 3.0rem;
`;

export const MusicH2 = styled.div`
    font-size: 1.5rem;
    transform: translateY(30%);
`;

export const MusicH3 = styled.div`
    font-size: 1.5rem;
    transform: translateY(30%);
    text-align: right;
`;

export const Musiccontent = styled.div`
    font-size: 1.3rem;
    text-align: justify;
`;

export const Musicbtn= styled.button`
    background-color: #ffffff;
    border: transparent;   
    transform: translateY(25%);
    text-align: right;
    font-size: 1.5rem;
    &:hover {
        cursor: pointer;
      }
`;

export const Recommendbtn= styled.button`
    background-color: #ffffff;
    font-size: 1.3rem;
    margin-left: 2rem;
    margin-top: 3rem;
    border-radius: 5px;
    padding: 10px;
    border: 2px solid #2d2d2d;
    margin-bottom: 4rem;
    &:hover {
        background: #2d2d2d;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #fff;
    }
`;
