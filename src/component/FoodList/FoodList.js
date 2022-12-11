import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useState} from 'react';
import {Table, Container, Row, Col} from 'react-bootstrap';

function FoodList({foods, combos, filter}) {  
    console.log(foods);
    foods = foods.filter((item) => item.Fname.includes(filter) || item.F_id.toString() == filter);
    combos = combos.filter((item) => item.Cb_name.includes(filter) || item.Cb_id.toString() == filter);

  return (
        <div style={{textAlign: "center"}}>
            <Container className = "text-left mt-3 pt-2 pb-2" style={{backgroundColor: "#DDDDDD"}}><h1>Food List</h1></Container>
            <Container style={{display: "inline-block", textAlign: "center"}}>
                {foods.map((item, idx) => {
                if (idx % 4 == 0 && idx + 3 < foods.length)
                return (
                <Row key = {idx}>
                <Col><Card  className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                <Card.Img variant="top" style = {{height: '11rem'}} src={foods[idx].PictureURL} />
                <Card.Body>
                    <Card.Title>{foods[idx].Fname}</Card.Title>
                    <Card.Text>
                        {foods[idx].Description}
                    </Card.Text>
                    <Card.Text className = "text-center">{foods[idx].Unit_price.toString()}</Card.Text>
                    <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                </Card.Body>
                </Card></Col>
                <Col><Card className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                <Card.Img variant="top" style = {{height: '11rem'}} src={foods[idx + 1].PictureURL} />
                <Card.Body>
                    <Card.Title>{foods[idx + 1].Fname}</Card.Title>
                    <Card.Text>
                        {foods[idx + 1].Description}
                    </Card.Text>
                    <Card.Text className = "text-center">{foods[idx + 1].Unit_price.toString()}</Card.Text>
                    <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                </Card.Body>
                </Card></Col>
                <Col><Card className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                <Card.Img variant="top" style = {{height: '11rem'}} src={foods[idx + 2].PictureURL} />
                <Card.Body>
                    <Card.Title>{foods[idx + 2].Fname}</Card.Title>
                    <Card.Text>
                        {foods[idx + 2].Description}
                    </Card.Text>
                    <Card.Text className = "text-center">{foods[idx + 2].Unit_price.toString()}</Card.Text>
                    <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                </Card.Body>
                </Card></Col>
                <Col><Card className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                <Card.Img variant="top" style = {{height: '11rem'}} src={foods[idx + 3].PictureURL} />
                <Card.Body>
                    <Card.Title>{foods[idx + 3].Fname}</Card.Title>
                    <Card.Text>
                        {foods[idx + 3].Description}
                    </Card.Text>
                    <Card.Text className = "text-center">{foods[idx + 3].Unit_price.toString()}</Card.Text>
                    <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                </Card.Body>
                </Card></Col>
                </Row>);
                else if (idx % 4 == 0 && idx + 2 < foods.length)
                return (
                    <Row key = {idx}>
                    <Col><Card key = {idx} className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                    <Card.Img variant="top" style = {{height: '11rem'}} src={foods[idx].PictureURL} />
                    <Card.Body>
                        <Card.Title>{foods[idx].Fname}</Card.Title>
                        <Card.Text>
                            {foods[idx].Description}
                        </Card.Text>
                        <Card.Text className = "text-center">{foods[idx].Unit_price.toString()}</Card.Text>
                        <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                    </Card.Body>
                    </Card></Col>
                    <Col><Card key = {idx + 1} className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                    <Card.Img variant="top" style = {{height: '11rem'}} src={foods[idx + 1].PictureURL} />
                    <Card.Body>
                        <Card.Title>{foods[idx + 1].Fname}</Card.Title>
                        <Card.Text>
                            {foods[idx + 1].Description}
                        </Card.Text>
                        <Card.Text className = "text-center">{foods[idx + 1].Unit_price.toString()}</Card.Text>
                        <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                    </Card.Body>
                    </Card></Col>
                    <Col><Card className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                    <Card.Img variant="top" style = {{height: '11rem'}} src={foods[idx + 2].PictureURL} />
                    <Card.Body>
                        <Card.Title>{foods[idx + 2].Fname}</Card.Title>
                        <Card.Text>
                            {foods[idx + 2].Description}
                        </Card.Text>
                        <Card.Text className = "text-center">{foods[idx + 2].Unit_price.toString()}</Card.Text>
                        <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                    </Card.Body>
                    </Card></Col>
                    <Col/>
                    </Row>);
                else if (idx % 4 == 0 && idx + 1 < foods.length)
                return (
                    <Row key ={idx}>
                    <Col><Card key = {idx} className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                    <Card.Img variant="top" style = {{height: '11rem'}} src={foods[idx].PictureURL} />
                    <Card.Body>
                        <Card.Title>{foods[idx].Fname}</Card.Title>
                        <Card.Text>
                            {foods[idx].Description}
                        </Card.Text>
                        <Card.Text className = "text-center">{foods[idx].Unit_price.toString()}</Card.Text>
                        <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                    </Card.Body>
                    </Card></Col>
                    <Col><Card key = {idx} className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                    <Card.Img variant="top" style = {{height: '11rem'}} src={foods[idx + 1].PictureURL} />
                    <Card.Body>
                        <Card.Title>{foods[idx + 1].Fname}</Card.Title>
                        <Card.Text>
                            {foods[idx + 1].Description}
                        </Card.Text>
                        <Card.Text className = "text-center">{foods[idx + 1].Unit_price.toString()}</Card.Text>
                        <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                    </Card.Body>
                    </Card></Col>
                    <Col/>
                    <Col/>
                    </Row>);
                else if (idx % 4 == 0) return (<Row key ={idx}>
                    <Col><Card key = {idx} className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                    <Card.Img variant="top" style = {{height: '11rem'}} src={foods[idx].PictureURL} />
                    <Card.Body>
                        <Card.Title>{foods[idx].Fname}</Card.Title>
                        <Card.Text>
                            {foods[idx].Description}
                        </Card.Text>
                        <Card.Text className = "text-center">{foods[idx].Unit_price.toString()}</Card.Text>
                        <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                    </Card.Body>
                    </Card></Col>
                    <Col/><Col/></Row>);
                
            })}
            </Container>
            <Container className = "text-left mt-3 pt-2 pb-2" style={{backgroundColor: "#DDDDDD"}}><h1>Combo List</h1></Container>
            <Container style={{display: "inline-block", textAlign: "center"}}>
                {combos.map((item, idx) => {
                if (idx % 4 == 0 && idx + 3 < combos.length)
                return (
                <Row key = {idx}>
                <Col><Card  className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                <Card.Img variant="top" style = {{height: '11rem'}} src={combos[idx].PictureURL} />
                <Card.Body>
                    <Card.Title>{combos[idx].Cb_name}</Card.Title>
                    <Card.Text>
                        {combos[idx].Description}
                    </Card.Text>
                    <Card.Text className = "text-center">{combos[idx].Cost.toString()}</Card.Text>
                    <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                </Card.Body>
                </Card></Col>
                <Col><Card className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                <Card.Img variant="top" style = {{height: '11rem'}} src={combos[idx + 1].PictureURL} />
                <Card.Body>
                    <Card.Title>{combos[idx + 1].Cb_name}</Card.Title>
                    <Card.Text>
                        {combos[idx + 1].Description}
                    </Card.Text>
                    <Card.Text className = "text-center">{combos[idx + 1].Cost.toString()}</Card.Text>
                    <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                </Card.Body>
                </Card></Col>
                <Col><Card className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                <Card.Img variant="top" style = {{height: '11rem'}} src={combos[idx + 2].PictureURL} />
                <Card.Body>
                    <Card.Title>{combos[idx + 2].Cb_name}</Card.Title>
                    <Card.Text>
                        {combos[idx + 2].Description}
                    </Card.Text>
                    <Card.Text className = "text-center">{combos[idx + 2].Cost.toString()}</Card.Text>
                    <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                </Card.Body>
                </Card></Col>
                <Col><Card className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                <Card.Img variant="top" style = {{height: '11rem'}} src={combos[idx + 3].PictureURL} />
                <Card.Body>
                    <Card.Title>{combos[idx + 3].Cb_name}</Card.Title>
                    <Card.Text>
                        {combos[idx + 3].Description}
                    </Card.Text>
                    <Card.Text className = "text-center">{combos[idx + 3].Cost.toString()}</Card.Text>
                    <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                </Card.Body>
                </Card></Col>
                </Row>);
                else if (idx % 4 == 0 && idx + 2 < combos.length)
                return (
                    <Row key = {idx}>
                    <Col><Card key = {idx} className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                    <Card.Img variant="top" style = {{height: '11rem'}} src={combos[idx].PictureURL} />
                    <Card.Body>
                        <Card.Title>{combos[idx].Cb_name}</Card.Title>
                        <Card.Text>
                            {combos[idx].Description}
                        </Card.Text>
                        <Card.Text className = "text-center">{combos[idx].Cost.toString()}</Card.Text>
                        <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                    </Card.Body>
                    </Card></Col>
                    <Col><Card key = {idx + 1} className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                    <Card.Img variant="top" style = {{height: '11rem'}} src={combos[idx + 1].PictureURL} />
                    <Card.Body>
                        <Card.Title>{combos[idx + 1].Cb_name}</Card.Title>
                        <Card.Text>
                            {combos[idx + 1].Description}
                        </Card.Text>
                        <Card.Text className = "text-center">{combos[idx + 1].Cost.toString()}</Card.Text>
                        <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                    </Card.Body>
                    </Card></Col>
                    <Col><Card className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                    <Card.Img variant="top" style = {{height: '11rem'}} src={combos[idx + 2].PictureURL} />
                    <Card.Body>
                        <Card.Title>{combos[idx + 2].Cb_name}</Card.Title>
                        <Card.Text>
                            {combos[idx + 2].Description}
                        </Card.Text>
                        <Card.Text className = "text-center">{combos[idx + 2].Cost.toString()}</Card.Text>
                        <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                    </Card.Body>
                    </Card></Col>
                    <Col/>
                    </Row>);
                else if (idx % 4 == 0 && idx + 1 < combos.length)
                return (
                    <Row key ={idx}>
                    <Col><Card key = {idx} className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                    <Card.Img variant="top" style = {{height: '11rem'}} src={combos[idx].PictureURL} />
                    <Card.Body>
                        <Card.Title>{combos[idx].Cb_name}</Card.Title>
                        <Card.Text>
                            {combos[idx].Description}
                        </Card.Text>
                        <Card.Text className = "text-center">{combos[idx].Cost.toString()}</Card.Text>
                        <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                    </Card.Body>
                    </Card></Col>
                    <Col><Card key = {idx} className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                    <Card.Img variant="top" style = {{height: '11rem'}} src={combos[idx + 1].PictureURL} />
                    <Card.Body>
                        <Card.Title>{combos[idx + 1].Cb_name}</Card.Title>
                        <Card.Text>
                            {combos[idx + 1].Description}
                        </Card.Text>
                        <Card.Text className = "text-center">{combos[idx + 1].Cost.toString()}</Card.Text>
                        <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                    </Card.Body>
                    </Card></Col>
                    <Col/>
                    <Col/>
                    </Row>);
                else if (idx % 4 == 0) return (<Row key ={idx}>
                    <Col><Card key = {idx} className = 'm-3 p-1' style={{ width: '15rem', display: 'inline-block' }}>
                    <Card.Img variant="top" style = {{height: '11rem'}} src={combos[idx].PictureURL} />
                    <Card.Body>
                        <Card.Title>{combos[idx].Cb_name}</Card.Title>
                        <Card.Text>
                            {combos[idx].Description}
                        </Card.Text>
                        <Card.Text className = "text-center">{combos[idx].Cost.toString()}</Card.Text>
                        <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
                    </Card.Body>
                    </Card></Col>
                    <Col/><Col/></Row>);
                
            })}
            </Container>
        </div>
  );
}

export default FoodList;
