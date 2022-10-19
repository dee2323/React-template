import React from 'react'
import styled from 'styled-components'
import {HomeInformation,HomeSection, HomeTitle,HomeInfo,HomeDesc,Span,HomeBtn} from './style.js'
import '../../index.css'

const Home = () => {
  return (
    <HomeSection>
    <div className="container">
        <HomeInformation>
            <HomeTitle HomeTitle>Hamza Nabil</HomeTitle>
            <HomeInfo>Creative Director</HomeInfo>
            <HomeDesc>
                Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
            </HomeDesc>
            <HomeBtn>Let's Begin</HomeBtn>
        </HomeInformation>
    </div>
</HomeSection>
  )
}

export default Home
