import React, { Component } from 'react';
import './App.css';
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
        this.githubRepoURL = '#CHANGE ME';
    }

    render() {
        return (
            <>
                <header>
                    <div class="navbar shadow-sm" style={{ backgroundColor: '#5f6474' }}>
                        <div class="d-flex justify-content-between">
                            <a href="https://www.orkg.org/orkg/">
                                <Logo />
                            </a>
                        </div>

                        <div>
                            <Tippy content="Link to original template project">
                                <span className="mr-2">
                                    <a href="https://gitlab.com/TIBHannover/orkg/github-pages-template">
                                        <FaGitlab size={35} color="#e24329" />
                                    </a>
                                </span>
                            </Tippy>
                            <Tippy content="Link to GitHub project">
                                <span className="mr-2">
                                    <a href={this.githubRepoURL}>
                                        <FaGithub size={35} color="#000" />
                                    </a>
                                </span>
                            </Tippy>
                        </div>
                    </div>
                </header>
                <Container fluid noGutters>
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
                </Container>
            </>
        );
    }
}

export default App;
