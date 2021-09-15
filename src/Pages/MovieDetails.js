import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
const MovieDetails = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);
    //UseEffect
    useEffect(() => {
        const currentMovie = movies.filter(
            (stateMovie) => stateMovie.url === url
        );
        setMovie(currentMovie[0]);
    }, [movies, url]);

    return (
        <>
            {movie && (
                <Details>
                    <Headline>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="movie" />
                    </Headline>
                    <Awards>
                        {movie.awards.map((award) => (
                            <Award
                                title={award.title}
                                description={award.description}
                                key={award.title}
                            />
                        ))}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="Movie" />
                    </ImageDisplay>
                    <Null></Null>
                </Details>
            )}
        </>
    );
};

const Details = styled.div`
    color: white;
`;
const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;
const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`;

const AwardStyle = styled.div`
    padding: 3rem;
    h3 {
        font-size: 1.5rem;
    }
    .line {
        width: 100%;
        height: 0.5rem;
        background: #23d997;
        margin: 1rem 0rem;
        border-radius: 7px;
    }
    p {
        padding: 2rem 0rem;
    }
`;
const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;
const Null = styled.div`
    height: 3rem;
    width: 100%;
`;
//Awards component
const Award = ({ description, title }) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    );
};
export default MovieDetails;
