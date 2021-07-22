import React, { Component } from 'react';
import logo_white from 'assets/logo_white.svg';
import logo from 'assets/logo.svg';
import styled from 'styled-components';
const Image = styled.div`
    height: 45px;
    width: 120px;
    background-image: url('${logo_white}');
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-transition: background-image 0.2s ease-in-out;
    transition: background-image 0.2s ease-in-out;
    &:hover {
        background-image: url('${logo}');
    }
`;

export default class Logo extends Component {
    render() {
        return (
            <div style={{ display: 'inline-block', position: 'relative' }}>
                <Image src={logo_white} alt="ORKG Logo" style={{ height: 45 }} />
            </div>
        );
    }
}
