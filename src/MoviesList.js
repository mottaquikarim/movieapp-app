import React, { Component, useState } from 'react';

import "./MoviesList.css";

import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import { Stars } from "./Stars";

const MoviesList = props => {
    return <div className="container">
       <div className="row">
           {props.data.map(movie => {
                return <div className="col-lg-3">
                    <Card>
                        <CardImg
                            top
                            width="100%"
                            className="movieslist-img"
                            src={movie.image_url} />
                        <CardBody>
                            <Stars avg_rating={movie.avg_rating || 0} />
                            <CardTitle>{movie.title}</CardTitle>
                            <Button primary>
                                <Link to={`/movies/${movie.id}`} style={{color:'white'}}>Go</Link> 
                            </Button>
                        </CardBody>
                    </Card>
                </div>
           })}
       </div>
    </div>
}

export {MoviesList};
