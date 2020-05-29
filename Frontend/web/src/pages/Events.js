import React from 'react';
import Aljon from "../assets/aljon.jpg"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={Aljon}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        2020 Spring Week 9
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>


    );

}

// const Events = () => {
//     return (
//         <div>
//
//
//
//             <div className="Home">
//
//
//                 <br/>
//                 <h1>Events</h1>
//                 <object data="https://drive.google.com/open?id=1Sx-5_oHPqYkDYWYEG0mgUcv0GgYQIRlA.pdf" type="application/pdf" width="300" height="200">
//                     <a href="https://drive.google.com/open?id=1Sx-5_oHPqYkDYWYEG0mgUcv0GgYQIRlA">FUSION 2020 Spring Week9</a>
//                 </object>
//             </div>
//
//
//
//
//         </div>
// );
// }
//
//
// export default Events;