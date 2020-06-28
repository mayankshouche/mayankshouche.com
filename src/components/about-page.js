import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled"

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const Container = styled.div`
  text-align: center;
`
const TextContainer = styled.div`
    text-align: left;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      query AboutPageQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
            <NameHeader>About Me </NameHeader>
            <Description>
                I'm currently a student at <b>UT Austin</b> and enjoy
                all things software engineering.
                I'm orginally from Houston, but now I live in the
                great city of Austin!
                Some of my hobbies outside of the world of software
                are going to concerts and road biking.
            </Description>
            <Description>
                Feel free to connect with me on <NavLink href="https://www.linkedin.com/in/mayankshouche/"> LinkedIn</NavLink>
                &nbsp;or <NavLink href="mailto:shouchem@utexas.edu"> email</NavLink> me! 
            </Description>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default AboutPage
