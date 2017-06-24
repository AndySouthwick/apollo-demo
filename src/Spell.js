import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

const query = gql`{
  allSpells(first: 10) {
    id
    name
  }
}`

class Spell extends Component {
  render () {
    console.log(this.props.data)
    return (
      <h1>Hi I'm a spell</h1>
    )
  }
}

export default graphql(query)(Spell)
