import React from 'react'
import {Row,Col,Card }from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
function Landingpage() {

  const navigateUrl = Navigate()
  const navigate = ()=> {
    navigateUrl('/home')
  }

  return (
    <>
    <Row className='mt-5 mb-5 align-items-center justify-content-between'>
    <Col></Col>
    <Col lg={4}>
      <h3 className='mb-3'>Welcome to <span className='text-waring'>Media Player</span></h3>
      <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est rerum laborum et tenetur in, hicfugit, inventore aspernatur laboriosam molestiae libero ab iusto suscipit quae temporibus soluta voluptatibus unde.</p>
      <button onClick={navigate} className='btn btn-info mt-5 fw-bolder'>Start</button>
      
    </Col>
    <Col className='ps-5' lg={6}>
    <img className='img-fluid ms-5 ps-5' src="https://media.tenor.com/xWH7FeE2uoMAAAAC/anime-recorder.gif" alt="landing page" />
    </Col>
    </Row>
    <div className='container mt-5 mb-5 justify-content-center align-items-center d-flex flex-column  '>
      <h3>Features</h3>
      <div className='cards mt-5 justify-content-between w-100 align-items-center d-flex '>
      <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://media.tenor.com/Wd2TjZ6iC3wAAAAC/logo.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://media.tenor.com/SZ0mKr1WKMsAAAAd/music-wave.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://media.tenor.com/_s0VcM_myIEAAAAC/speaker-loud-speaker.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

      </div>
    </div>

    <div className='container mt-5 mb-5 d-flex justify-content-between w-100 border p-5 border-secondary rounded align-items-center'>
      <div className='content'>
      <h3><span className='mb-5 text-warning'>Simple,Fast and Powerful</span></h3>

      <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusamus molestiae, quibusdam veniam voluptatum repellendus consectetur tempore nisi eligendi, necessitatibus laudantium mollitia obcaecati minima assumenda reiciendis doloremque eveniet dolore nam? </h6>

      <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusamus molestiae, quibusdam veniam voluptatum repellendus consectetur tempore nisi eligendi, necessitatibus laudantium mollitia obcaecati minima assumenda reiciendis doloremque eveniet dolore nam? </h6>

      <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusamus molestiae, quibusdam veniam voluptatum repellendus consectetur tempore nisi eligendi, necessitatibus laudantium mollitia obcaecati minima assumenda reiciendis doloremque eveniet dolore nam? </h6>
      </div>
      <div className='video ms-5'>
      <iframe className='rounded-5' width="689" height="387" src="https://www.youtube.com/embed/rOouwTI6yAI" title="Kalaastar - Teaser | Honey 3.0 | Yo Yo Honey Singh &amp; Sonakshi Sinha | Zee Music Originals" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    </>
  )
}

export default Landingpage;