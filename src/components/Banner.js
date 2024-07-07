import { useState, useEffect, useCallback } from "react";
import { Container, Row, Nav } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Developer", "Back-End Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const [activeLink, setActiveLink] = useState('home');

    const tick = useCallback(() => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(200); // Slow down deletion
        } else {
            setDelta(300 - Math.random() * 100); // Speed up typing
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [isDeleting, loopNum, period, text.length, toRotate]);

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [delta, tick]);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>
                        {`Hi I'm Manjot Singh `}
                        <br />
                        <span className="text-wrapper">
                            <span className="wrap">{text}</span>
                        </span>
                    </h1>
                    <p>
                    Hello, I am an aspiring software engineer studying Computer Science at the University of California, Irvine. My passion is collecting, transforming, and providing data that helps others.
                    I am looking for opportunities that deal with software engineering hoping to expand my scope of technologies, and the boundaries of ideas as my journey continues.
                    </p>
                    <Nav.Link href="#connect" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
                        <button
                            style={{ backgroundColor: 'transparent', borderRadius: '50px', padding: '10px' }}
                            onClick={() => console.log('connect')}>
                            Let's connect <ArrowRightCircle size={25}/>
                        </button>
                    </Nav.Link>
                </Row>
            </Container>
        </section>
    );
};
