import React from 'react';
import { Arrow, Button, Container, Desc, Image, ImgContainer, InfoContainer, Slide, Title, Wrapper } from './Slider.elements';
import { sliderItems } from '../../data';
import { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left"){
            setSlideIndex( slideIndex > 0 ? slideIndex - 1 : 2);
        }else {
            setSlideIndex( slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    
    return (
        <Container>
            <Arrow direction = "left" onClick = { () => handleClick ("left") } >
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title> {item.title} </Title>
                            <Desc> {item.desc} </Desc>
                            <Button>Cotizar</Button>
                        </InfoContainer>
                    </Slide>
                ))}

            </Wrapper>
            <Arrow direction = "right" onClick = { () => handleClick ("right") } >
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    );
};

export default Slider;