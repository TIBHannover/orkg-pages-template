import React, { Component } from 'react';
import './visWidgetConfig.css';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getComparisonById } from 'network/networkRequests';

class ExampleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            requestedData: null
        };
    }

    componentDidMount() {
        // fetch data
        this.getData();
    }

    getData = () => {
        getComparisonById('R44930').then(dataFrame => {
            this.setState({ requestedData: dataFrame, loading: false });
        });
    };

    renderData = () => {
        // create an authors array;
        const authorStatements = this.state.requestedData.statementsData.content.filter(item => item.predicate.id === 'P27');

        if (!this.state.requestedData) {
            return <div>Some error</div>;
        } else {
            return (
                <div>
                    <div>
                        Title: <b>{this.state.requestedData.resourceMetaData.label}</b>; Number of contributions:{' '}
                        <b>{this.state.requestedData.comparisonData.contributions.length}</b>
                    </div>
                    <div>
                        Authors:{' '}
                        {authorStatements.map(item => {
                            return item.object.label + '; ';
                        })}
                    </div>
                    <div>Comparison Data:</div>
                    {this.renderComparisonTable()}
                </div>
            );
        }
    };

    renderComparisonTable = () => {
        const dataFrame = this.state.requestedData.comparisonData;
        return (
            <table style={{ width: '100%', overflow: 'auto', display: 'block' }}>
                {/*  define headers*/}
                <thead style={{ borderTop: '1px solid black', borderBottom: '1px solid black' }}>
                    <tr>
                        <th
                            style={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                borderRight: '1px solid black',
                                borderLeft: '1px solid black',
                                padding: '3px'
                            }}
                        >
                            Contribution
                        </th>
                        {dataFrame.properties
                            .filter(property => property.active === true)
                            .map(property => {
                                return (
                                    <th
                                        key={property.label}
                                        style={{
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            borderRight: '1px solid black',
                                            padding: '3px'
                                        }}
                                    >
                                        {property.label}
                                    </th>
                                );
                            })}
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(dataFrame.data).map((data, id) => {
                        return (
                            <tr key={'tr_id' + id} style={{ border: '1px solid black', borderTop: 'none' }}>
                                <td
                                    key={'td_id_' + id}
                                    style={{
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        borderRight: '1px solid black',
                                        borderLeft: '1px solid black',
                                        padding: '3px',
                                        maxWidth: '200px'
                                    }}
                                >
                                    {dataFrame.contributions[id].contributionLabel +
                                        '(' +
                                        dataFrame.contributions[id].id +
                                        '/' +
                                        dataFrame.contributions[id].paperId +
                                        ')'}
                                </td>
                                {this.createRows(id)}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    };

    createRows = rowId => {
        // property filtering
        const dataFrame = this.state.requestedData.comparisonData;
        const activeProperties = dataFrame.properties.filter(property => property.active === true);
        return activeProperties.map(property => {
            const dataValues = dataFrame.data[property.id][rowId];
            return (
                <td
                    key={'td_id' + rowId + '_' + property.id}
                    style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        borderRight: '1px solid black',
                        padding: '3px',
                        maxWidth: '200px'
                    }}
                >
                    {dataValues.map(val => {
                        return val.label + ' ';
                    })}
                </td>
            );
        });
    };

    /** Component Rendering Function **/
    render() {
        return (
            <div>
                <div className={'headerStyle'}>
                    Example A: Comparisons{' '}
                    <a style={{ color: '#e86161' }} href="https://www.orkg.org/orkg/comparison/R44930">
                        COVID-19 Reproductive Number Estimates
                    </a>
                </div>
                <div className={'bodyStyle'}>
                    {this.state.loading && (
                        <h2 className="h5">
                            <span>
                                <Icon icon={faSpinner} spin />
                            </span>{' '}
                            Loading ...
                        </h2>
                    )}
                    {!this.state.loading && this.renderData()}
                </div>
            </div>
        );
    }
}

export default ExampleA;
