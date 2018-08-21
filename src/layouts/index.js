import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactDOM from 'react-dom';
import Transition from 'react-transition-group/Transition';

// Fonts
import 'typeface-roboto';
import 'typeface-mina';

import Header from '../components/Header'
import './normalize.css';
import './index.css';
import favicon from '../media/favicon.ico';

class Content extends Component {
    render() {
        return (
            <div ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}>
                {this.props.children}
            </div>
        )
    }
}

const TemplateWrapper = ({ children, location }) => (
    <div>
        <Helmet
            title="Jacob Schmocker"
            meta={[
                { name: 'description', content: 'Jacob Schmocker is a web developer, soon-to-be student of computer science, and a Linux enthusiast.' },
                { name: 'author', content: 'Jacob Schmocker' },
            ]}
            link={[
                { rel: 'icon', href: `${favicon}` },
            ]}
        />
        <Header />
        <Content location={location}>
            {children()}
        </Content>
    </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
