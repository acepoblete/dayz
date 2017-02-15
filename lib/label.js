'use strict';

var React = require('react');
var moment = require('moment');

var Label = React.createClass({
    displayName: 'Label',


    propTypes: {
        day: React.PropTypes.object.isRequired
    },

    render: function render() {

        var className = 'label';
        if (this.props.day.format('YYYYMMDD') === moment().format('YYYYMMDD')) {
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