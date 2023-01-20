import Head from 'next/head'
import Header from '../components/Header'
import MessageBoard from '../components/MessageBoard'
import Footer from '../components/Footer'
import { Container, Row, Col } from 'react-bootstrap'
export default function Home() {
  return (
    <>
      <Head>
        <title>ICS 221 Lab 2</title>
        <meta name="description" content="Lab 2 for 221. NextJS practice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

        <Container>
            <Row  className="justify-content-center">
                <Col lg={8}>
                    <Header />
                </Col>
            </Row>
            <Row  className="justify-content-center">
                <Col lg={8}>
                    <MessageBoard />
                </Col>
            </Row>
            <Row  className="justify-content-center">
                <Col lg={8}>
                    <Footer />
                </Col>
            </Row>
        </Container>
      </>    
  )
}
