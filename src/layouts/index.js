import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import Transition from 'react-transition-group/Transition';

import Header from '../components/Header'
import './normalize.css';

const ContentWrapper = styled.div`
    padding: 25px;
`

class Content extends Component {
    // componentWillReceiveProps(nextProps) {
    //     const { location } = this.props;
    //     console.log(this.wrapper)
    //     if (location.pathname !== nextProps.location.pathname) {
    //         this.wrapper.transition = this.wrapper.animate([
    //             { opacity: 1 },
    //             { opacity: 0 },
    //         ],
    //         {
    //             duration: 1000,
    //             fill: "forwards",
    //             iterations: 1,
    //         });
    //     }
    // }
    // componentDidUpdate(lastProps, lastState) {
    //     const { location } = this.props;
    //     console.log(this.wrapper)
    //     if (location.pathname !== lastProps.location.pathname) {
    //         this.wrapper.transition.onfinish = this.wrapper.animate([
    //             { opacity: 0 },
    //             { opacity: 1 },
    //         ],
    //         {
    //             duration: 500,
    //             fill: "forwards",
    //             iterations: 1,
    //         });
    //     }
    // }

    render() {
        return (
            <ContentWrapper ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}>
                {this.props.children}
            </ContentWrapper>
        )
    }
}

const TemplateWrapper = ({ children, location }) => (
    <div>
        <Helmet
            title="Jacob Schmocker"
            meta={[
                { name: 'description', content: 'Jacob Schmocker is a web developer, soon-to-be student of computer science, and a Linux enthusiast that decided to start a blog.' },
                { name: 'author', content: 'Jacob Schmocker' },
            ]}
            link={[
                { href: 'https://fonts.googleapis.com/css?family=Merriweather:400,400i,700|Mina|Rubik:700', rel: 'stylesheet' }
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
