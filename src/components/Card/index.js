import React from 'react'
import { useDrag } from 'react-dnd'

import { Container, Label } from './styles.js'

export default function Card({ data }) {
  return (
    <Container>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>
      <p>{data.content}</p>
      {data.user && <img alt="Avatar" src={data.user} />}
    </Container>
  )
}