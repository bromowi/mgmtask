import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Card, Row, Col, Container, Button } from "react-bootstrap";
import './home.css'

const Character = () => {
    const [json, setJson] = useState([]);
    const [err, setErr] = useState(null);
    const [page, setPage] = useState(1);
    const [favorites, setFavorite] = useState("");
    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/albums/${page}/photos`)
        .then((res) => {
          let card2 = json;
          setJson([...card2, ...res.data]);
        })
        .catch((error) => {
          setErr(error);
        });
    }, [page]);
    const addPage = () => {
      setPage(page + 1);
    };
    
    return (
        <div>
            <Row>
            {json.map((data, idx) => {
                return (

                    <div key={idx}>
                        <Col>
                            <Card 
                            style={{ width: '18rem', height: '75vh', }}
                            className='Card'>
                            <Card.Img variant="top" src={data.thumbnailUrl} 
                            style={{ width:'17rem', height:'15rem'}} />
                            <Card.Body>
                            <Card.Title style={{width:'15rem', height: '60vh'}}>
                                <p>Title: {data.title}</p>
                            </Card.Title>
                            </Card.Body>
                            <Card.Footer>
                            <Button 
                            href={data.url}
                            style={{
                                backgroundColor: "black",
                                color: " #fde84d",
                                width: "15vw",
                                height: "50px",
                            }}
                            className="Tombol">
                            Details
                            </Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                    </div>
            
                )
            })}
            </Row>
        </div>
    )

}
export default Character;