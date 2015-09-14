'use strict';

var React = require('react');
import Container from './Container';

class SortableSimple {
    render() {
        return (
            <div>
                <Container />
            </div>
        );
    }
}


React.render(<SortableSimple/>, document.body);