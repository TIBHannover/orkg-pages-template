import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaGithub, FaGitlab } from 'react-icons/fa';
import Logo from './Logo';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ExampleA from 'components/ExampleA';
import ExampleB from 'components/ExampleB';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowHeight: 100,
            windowWidth: 100
        };
        this.githubRepoURL = '#CHANGE ME';
    }

    componentDidMount() {
        // connect update stuff;
        window.addEventListener('resize', this.updateDimensions);
        this.updateDimensions();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {}
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions = () => {
        this.setState({
            windowHeight: window.innerHeight - 3,
            windowWidth: window.innerWidth
        });
    };

    render() {
        return (
            <div style={{ backgroundColor: '#282c34', width: '100%' }}>
                <div
                    style={{
                        height: '100vh',
                        color: 'white'
                    }}
                >
                    <StyledTopBar>
                        <div style={{ float: 'left', paddingTop: '5px' }}>
                            <Tippy content="Link to GitHub project">
                                <span style={{ padding: '2px', paddingLeft: '10px' }}>
                                    <a href="https://www.orkg.org/orkg/">
                                        <Logo />
                                    </a>
                                </span>
                            </Tippy>
                        </div>
                        <div style={{ float: 'right', padding: '2px' }}>
                            <Tippy content="Link to original template project">
                                <span style={{ paddingRight: '10px' }}>
                                    <a href="https://gitlab.com/TIBHannover/orkg/github-pages-template">
                                        <FaGitlab size={35} />
                                    </a>
                                </span>
                            </Tippy>
                            <Tippy content="Link to GitHub project">
                                <span style={{ paddingRight: '10px' }}>
                                    <a href={this.githubRepoURL}>
                                        <FaGithub size={35} />
                                    </a>
                                </span>
                            </Tippy>
                        </div>
                    </StyledTopBar>
                    <div style={{ position: 'relative', top: '40px' }}>
                        <Container
                            style={{
                                backgroundColor: '#9c9c9c',
                                marginLeft: '10%',
                                marginRight: '10%',
                                maxWidth: '80%',
                                height: 'calc(100vh - 40px)',
                                overflow: 'auto'
                            }}
                        >
                            <ExampleA />
                            <ExampleB />
                        </Container>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

const StyledTopBar = styled.div`
    margin-bottom: 0;
    width: 100%;
    height: 40px;
    color: white;
    position: fixed;
    // padding-top: 5px;

    // For the background
    background: #5f6474;
`;
