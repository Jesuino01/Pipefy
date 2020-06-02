import React from 'react'
import { Container } from './styles.js'
import { MdAdd } from 'react-icons/md'

import Card from '../Card'

export default function List({ data }) {
  console.log('done ==>' , data.done)
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button>
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map(card => { return <Card key={card.id} data={card} />})}
      </ul>
    </Container>
  )
}