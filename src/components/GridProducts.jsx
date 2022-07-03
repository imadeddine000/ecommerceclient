import { Card, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const GridProducts = () => {
  return (
    <>
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Card variant="outlined">
                        THIS IS GRID
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card variant="outlined">
                        THIS IS GRID
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card variant="outlined">
                        THIS IS GRID
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card variant="outlined">
                        THIS IS GRID
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </>
  )
}

export default GridProducts