import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import Highlighter from "react-highlight-words";

export default class Suggests extends Component {
    render() {
        return (
            <div>
                {this.props.suggestions.map(suggestion => (
                    <Card body className="text-center">
                        <CardTitle tag="h5">
                            <Highlighter
                                searchWords={[this.props.search]}
                                textToHighlight={suggestion.title}
                                highlightStyle={{ fontSize: '24px', backgroundColor: 'yellow' }}
                            />
                        </CardTitle>
                        <CardText>
                            <Highlighter
                                searchWords={[this.props.search]}
                                textToHighlight={suggestion.content}
                                highlightStyle={{ fontSize: '24px', backgroundColor: 'yellow' }}
                            />
                        </CardText>
                    </Card>))}
            </div>
        )
    }
}
