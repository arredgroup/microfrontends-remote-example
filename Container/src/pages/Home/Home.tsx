import React from "react";
import {Card, Container, Grid, Typography, CardContent} from "@material-ui/core";
import {PrincipalTable} from "../../components/Remotes";

export const Home: React.FC = () => {

    const elements = [
        {
            id: 1,
            name: "Booking"
        },
        {
            id: 2,
            name: "AirBnB"
        },
        {
            id: 3,
            name: "Google"
        },
        {
            id: 4,
            name: "Hotels"
        },
        {
            id: 5,
            name: "Trivago xD"
        }
    ];

    return (
        <Container>
            <Typography variant="h1">
                Channels
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <React.Suspense fallback={"...."}>
                        <PrincipalTable
                            title={"Channels"}
                            elements={elements}
                        />
                    </React.Suspense>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">
                                Info
                            </Typography>
                            <Typography variant="body2">
                                This Table is a component is loaded remotely
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}