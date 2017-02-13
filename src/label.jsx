const React = require('react');

const Label = React.createClass({

    propTypes: {
        day: React.PropTypes.object.isRequired,
        isCurrent: React.PropTypes.bool
    },

    render() {

        let className = 'label';
        if (this.props.isCurrent) {
            className = 'label current';
        }

        return (
            <div className={className} >{this.props.day.format('D')}</div>
        );
    }

});

module.exports = Label;
