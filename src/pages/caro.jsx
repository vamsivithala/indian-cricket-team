import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
export default function Caro() {
    return <>

        <div className='carousel'>
            <Carousel>
                <Carousel.Item>
                    <Image
                        width="1000"
                        height="500"
                        className="d-block w-100"
                        src="/Gttrophy.jpg"
                        alt="GUJARAT TITANS"
                    />
                    <Carousel.Caption>
                        <h3>GUJARATH TITANS</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        width="600"
                        height="600"
                        className="d-block w-100"
                        src="/gtvsrr.webp"
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        width="300"
                        height="500"
                        src="/winners.jpg"
                        alt="GUJARAT TITANS"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>


        <h1>matchesssss</h1>
    </>
}