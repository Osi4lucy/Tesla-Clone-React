import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`

	width: 100vw;
	height: 100vh;
	background-size: cover;
	background-position: center;
	/* background-image: url('/images/model-s.jpg'); */
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: space-between; // vertical
	align-items: center; //horizontal
	background-image: ${(props) => `url('/images/${props.bgImage}')`};
`;

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`;

const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 30px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
const LeftButton = styled.div`
	background-color: rgba(23, 26, 32, 0.8);
	height: 40px;
	width: 256px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	opacity: 0.85;
	text-transform: uppercase;
	font-size: 12px;
	cursor: pointer;
	margin: 10px;
`;
const Buttons = styled.div``;

const DownArrow = styled.img`
	height: 40px;
	overflow-x: hidden;
	animation: animateDown infinite 1.5s;
`;

const RightButton = styled(LeftButton)`
	background-color: white;
	color: black;
	opacity: 0.65;
`;

const Section = (props) => {
	return (

		<Wrapper bgImage={props.backgroundImage}>
			<Fade bottom>
			<ItemText>
				<h1>{props.title}</h1>
				<p>{props.description}</p>
			</ItemText>
			</Fade>
			<Buttons>
				<ButtonGroup>
          <LeftButton>{props.leftBtnText}</LeftButton>
          {props.rightBtnText && 
            <RightButton>{props.rightBtnText}</RightButton>
          }
					
				</ButtonGroup>
				<DownArrow src='./images/down-arrow.svg' />
			</Buttons>
		</Wrapper>
	);
};

export default Section;
