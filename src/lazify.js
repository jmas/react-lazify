import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default (load, prompt=null) => {
    return class LazyComponent extends Component {
        get loadingPrompt () {
            if (prompt) {
                return prompt;
            }
            return React.createElement('span', {}, 'Loading...');
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
