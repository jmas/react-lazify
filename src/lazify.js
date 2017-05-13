import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default load => {
    return class LazyComponent extends Component {
        static propTypes = {
            loadingPrompt: PropTypes.node
        };

        static defaultProps = {
            loadingPrompt: null
        };

        get loadingPrompt () {
            if (this.props.loadingPrompt) {
                return this.props.loadingPrompt;
            }
            return React.createElement('span', 'Loading&hellip');
        }

        constructor () {
            super();
            this.state = {
                Component: null
            };
        }

        componentDidMount () {
            load().then(namespace => this.setState({ Component: namespace.default }));
        }

        render () {
            const { props } = this;
            const { Component } = this.state;
            return Component ? React.createElement(Component, props): this.loadingPrompt;
        }
    }
};
