
var React = require('react');
var PropTypes = React.PropTypes;
var ItemTypes = require('./ItemTypes');
var DragSource = require('react-dnd').DragSource;
var DropTarget = require('react-dnd').DropTarget;
var _ = require('lodash');

var style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move'
};

var Card = React.createClass({
        propTypes: {
            connectDragSource: PropTypes.func.isRequired,
            connectDropTarget: PropTypes.func.isRequired,
            isDragging: PropTypes.bool.isRequired,
            id: PropTypes.any.isRequired,
            text: PropTypes.string.isRequired,
            moveCard: PropTypes.func.isRequired
        },
    render() {
        var text = this.props.text;
        var isDragging = this.props.isDragging;
        var connectDragSource = this.props.connectDragSource;
        var connectDropTarget = this.props.connectDropTarget;

        var opacity = isDragging ? 0 : 1;

        return connectDragSource(connectDropTarget(
            <div style={{ ...style, opacity }}>
                {text}
            </div>
        ));
    }
});

var cardSource = {
    beginDrag(props) {
        return { id: props.id };
    }
};

var cardTarget = {
    hover(props, monitor) {
        var draggedId = monitor.getItem().id;

        if (draggedId !== props.id) {
            props.moveCard(draggedId, props.id);
        }
    }
};


function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

function collect2(connect) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

module.exports = _.flow(
    DragSource(ItemTypes.CARD, cardSource, collect),
    DropTarget(ItemTypes.CARD, cardTarget,collect2)
)(Card);
