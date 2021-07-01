import React, { Component } from 'react';
import './visWidgetConfig.css';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

class ExampleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        // fetch data
        this.getData().then(() => {
            console.log('done loading');
        });
    }

    componentDidUpdate = (prevProps, prevState) => {};

    componentWillUnmount() {}

    getData = async () => {
        // TODO
    };

    /** Component Rendering Function **/
    render() {
        return (
            <div
                id="chartWidget"
                style={{
                    width: '94%',
                    marginBottom: '30px',
                    paddingLeft: '2.5%'
                }}
            >
                <div id="chartWidgetHeader" className={'headerStyle'}>
                    Example A: Comparisons{' '}
                    <a style={{ color: '#e86161' }} href="https://www.orkg.org/orkg/comparison/R44930">
                        COVID-19 Reproductive Number Estimates
                    </a>
                </div>
                <div id="chartWidgetBody" className={'bodyStyle'}>
                    {this.state.loading && (
                        <h2 className="h5">
                            <span>
                                <Icon icon={faSpinner} spin />
                            </span>{' '}
                            Loading ...
                        </h2>
                    )}
                </div>
            </div>
        );
    }
}

export default ExampleA;
