import React from 'react';

import Thumbnail_1 from '../assets/FUSION_2020_Spring_Week1_Thumbnail.png';
import Thumbnail_2 from '../assets/FUSION_2020_Spring_Week2_Thumbnail.png';
import Thumbnail_3 from '../assets/FUSION_2020_Spring_Week3_Thumbnail.png';
import Thumbnail_4 from '../assets/FUSION_2020_Spring_Week4_Thumbnail.png';
import Thumbnail_5 from '../assets/FUSION_2020_Spring_Week5_Thumbnail.png';
import Thumbnail_6 from '../assets/FUSION_2020_Spring_Week6_Thumbnail.png';
import Thumbnail_7 from '../assets/FUSION_2020_Spring_Week7_Thumbnail.png';
import Thumbnail_8 from '../assets/FUSION_2020_Spring_Week8_Thumbnail.png';
import Thumbnail_9 from '../assets/FUSION_2020_Spring_Week9_Thumbnail.png';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const cardStyles = makeStyles({
    root: {
        maxWidth: 350,
    },
    media: {
        height: 125,
    },
});



export default function CenteredGrid() {
  const grids = gridStyles();
  const cards = cardStyles();

    return (
        <div className={grids.root} style={{ padding : 60 }}>
            <Grid container spacing={3}>

                {/* Week 1 */}
                <Grid item xs={4}>
                    <Card className={cards.root}>
                        <CardActionArea>
                            <CardMedia
                                className={cards.media}
                                image={Thumbnail_1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    2020 Spring Week 1
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://drive.google.com/open?id=1EFTiWjiw-dJVXp1lVzQv9phmzTqvot1A">
                                View Newsletter
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Week 2 */}
                <Grid item xs={4}>
                    <Card className={cards.root}>
                        <CardActionArea>
                            <CardMedia
                                className={cards.media}
                                image={Thumbnail_2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    2020 Spring Week 2
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://drive.google.com/open?id=1mwuFimYK1cwBY6cd8l9XJ0pLm1sN14X3">
                                View Newsletter
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Week 3 */}
                <Grid item xs={4}>
                    <Card className={cards.root}>
                        <CardActionArea>
                            <CardMedia
                                className={cards.media}
                                image={Thumbnail_3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    2020 Spring Week 3
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://drive.google.com/open?id=1Uem6gTXfO39HlByb2cyF195Nmm0okCli">
                                View Newsletter
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Week 4 */}
                <Grid item xs={4}>
                    <Card className={cards.root}>
                        <CardActionArea>
                            <CardMedia
                                className={cards.media}
                                image={Thumbnail_4}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    2020 Spring Week 4
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://drive.google.com/open?id=1KApqm4vHTvhVIWJOw-fA3hVkk1XHZZrP">
                                View Newsletter
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Week 5 */}
                <Grid item xs={4}>
                    <Card className={cards.root}>
                        <CardActionArea>
                            <CardMedia
                                className={cards.media}
                                image={Thumbnail_5}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    2020 Spring Week 5
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://drive.google.com/open?id=1rHUVM5efxxtSAf2FcRxVGL-S5U3cRYN1">
                                View Newsletter
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Week 6 */}
                <Grid item xs={4}>
                    <Card className={cards.root}>
                        <CardActionArea>
                            <CardMedia
                                className={cards.media}
                                image={Thumbnail_6}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    2020 Spring Week 6
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://drive.google.com/open?id=1amkI_Zsenma1AQMvLNCswSYAZRWS5_EW">
                                View Newsletter
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Week 7 */}
                <Grid item xs={4}>
                    <Card className={cards.root}>
                        <CardActionArea>
                            <CardMedia
                                className={cards.media}
                                image={Thumbnail_7}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    2020 Spring Week 7
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://drive.google.com/open?id=1zip7YJNhyqXyX8aw_vRxb9Ped1MmINUU">
                                View Newsletter
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Week 8 */}
                <Grid item xs={4}>
                    <Card className={cards.root}>
                        <CardActionArea>
                            <CardMedia
                                className={cards.media}
                                image={Thumbnail_8}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    2020 Spring Week 8
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://drive.google.com/open?id=12gWeKURRQc4bma4_pyRM_M7-jkEC1bH9">
                                View Newsletter
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Week 9 */}
                <Grid item xs={4}>
                    <Card className={cards.root}>
                        <CardActionArea>
                            <CardMedia
                                className={cards.media}
                                image={Thumbnail_9}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    2020 Spring Week 9
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://drive.google.com/open?id=1Sx-5_oHPqYkDYWYEG0mgUcv0GgYQIRlA">
                                View Newsletter
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                
            </Grid>
        </div>
  );
}