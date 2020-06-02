import React from 'react'
import { loadLists } from '../../service/api'

import List from '../List'

import { Container } from './styles.js'

const list = loadLists()

export default function Board() {
  return (
    <Container>
      {list.map((list) => {
        return <List key={list.title} data={list}/>
      })}
    </Container>
  )
}