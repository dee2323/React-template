import React, { Component } from 'react'
import {WorkSection,WorkTitle,Span, Part,Icon,PartTitle,Line,PartDesc} from './style.js'
import '../../index.css'
import axios from 'axios'
class Work extends Component {
state={
  works:[]
}
componentDidMount(){
  axios.get('js/data.json').then(res=>this.setState({
works:res.data.works
  }))
}

  render(){
const ListParts=this.state.works.map(item=> { return (<Part first={item.id} key={item.id}>
<Icon className={item.icon_name}></Icon>
<PartTitle>{item.title}</PartTitle>
<Line />
<PartDesc>
{item.body}
</PartDesc>
</Part>)})
    return (
    <WorkSection>
    <div className="container">
        <WorkTitle><Span>My</Span> Work</WorkTitle>
        {ListParts}
    </div>
</WorkSection>
  )}
  
}

export default Work
