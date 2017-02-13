'use strict';

var React = require('react');

var Label = React.createClass({
    displayName: 'Label',


    propTypes: {
        day: React.PropTypes.object.isRequired,
        isCurrent: React.PropTypes.bool
    },

    render: function render() {

        var className = 'label';
        if (this.props.isCurrent) {
            className = 'label current';
        }

        return React.createElement(
            'div',
            { className: className },
            this.props.day.format('D')
        );
    }
});

module.exports = Label;