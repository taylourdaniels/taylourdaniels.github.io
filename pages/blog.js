import Head from "next/head"
import { Box } from "@chakra-ui/layout"

export default function Blog() {
  const username = 'tcdaniels'
  const password = 'Godslove773'
  
  function createBlog({ title , description }) {
    return
  }

  function publish({ title , description}) {
    return
  }

  function login({ username , password }) {
    return
  }

  return (
      <Box>
        <Box>
          <Head>
            <title>Thoughts and Ideas</title>
          </Head>
        </Box>

        <Box>
          <h1>Taylour</h1>
        </Box>
      </Box>
  )
}