import React from 'react';
import { Container, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

interface Props {

}

interface ParamTypes {
    id: string;
}

export const OtherPage = (props: Props) => {

    const history = useHistory();
    const param = useParams<ParamTypes>();

    const handleClick = () => {
        history.push("/");
    }

    return (
        <Container>
            <h1>Other page {param.id}</h1>
            <Button onClick={handleClick} variant="primary">Back to Home</Button>
        </Container>
    )
}