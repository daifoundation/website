import React from "react"
import Layout from "../layout"
import { Container, Heading } from "theme-ui"
import content from "../content.json"
import { renderMarkdown as md } from "../util"

export default function Board() {
  return (
    <Layout tabPage="board" surfaceColor="conch">
      <Container variant="text">
        <Heading>{content.board.title}</Heading>
        {md('board.body')}
      </Container>
    </Layout>
  )
}
