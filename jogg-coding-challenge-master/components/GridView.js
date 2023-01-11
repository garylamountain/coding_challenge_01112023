import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import LinkIconSVG from '../svgs/link-icon.svg';
import ShareIconSVG from '../svgs/share-icon.svg';

const GridView = props => {
  
  const { mobileView, cards } = props;

  // quick function to assign color based on card status
  const statusColor = s => {
    if(s === "ongoing"){
      return `blue`;
    } else if(s === "schduled"){
      return `yellow`;
    } else {
      return `red`;
    }
  };

  // unicode character
  const redCircle = "\uD83D\uDD34";

  return (
    <div>
      <Grid container justifyContent="center">
        {cards.map(card => (
          <Grid item xs={ mobileView ? 12 : 3 } key={card.id} className={`grid-${statusColor(card.status)}`}>
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image={card.image}
                title={card.title}
              />
              <CardContent className="card-content">
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2">
                  {/* nested ternary to easily display nothing for 0 replies, "reply" for 1 and "replies for >1" */}
                  {card.replies > 0 ? card.replies === 1 ? `${redCircle}  1 reply` : `${redCircle}  ${card.replies} replies` : ''}
                </Typography>
              </CardContent>
              <CardActions className="card-actions">
                <ShareIconSVG width={15}/>
                <LinkIconSVG width={15}/>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default GridView;