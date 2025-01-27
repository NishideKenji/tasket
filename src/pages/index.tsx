import { Box, Container, Typography } from '@mui/material'
import { Inter } from 'next/font/google'

import { trpc } from '@/utils/trpc'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const hello = trpc.hello.useQuery({ text: 'client' })
  if (!hello.data) {
    return <div>Loading...</div>
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Container maxWidth="md">
        <Box textAlign="center" py={10}>
          <Typography variant="h2" gutterBottom>
            Welcome to Our Site
          </Typography>
          <Box mt={4}>discription</Box>
        </Box>
        <div>
          <p>{hello.data.greeting}</p>
        </div>
      </Container>
    </main>
  )
}
