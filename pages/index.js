import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../components/Header'
import Header from '../components/MessageBoard'
import Header from '../components/BoardMessage'
import Header from '../components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>ICS 221 Lab 2</title>
        <meta name="description" content="Lab 2 for 221. NextJS practice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <Container>
            <Row  className="justify-content-center">
                <Col lg={8}>
                    <Header />
                </Col>
            </Row>
            <Row  className="justify-content-center">
                <Col lg={8}>
                    <MessageBoard/>
                </Col>
            </Row>
            <Row  className="justify-content-center">
                <Col lg={8}>
                    <Footer />
                </Col>
            </Row>
        </Container>
      </>    
    </>
  )
}
