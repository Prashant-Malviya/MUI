import { useState } from 'react'
import { Typography, AppBar, Card, CardActions, CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Typography variant='h1'>Hello World !</Typography>
    </>
  )
}

export default App
