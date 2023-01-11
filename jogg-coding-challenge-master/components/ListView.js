import React, { useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import LinkIconSVG from '../svgs/link-icon.svg';

const ListView = props => {
  
  const { cards } = props;
  // tooltip state
  const [open, setOpen] = useState(false);

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

  // capitalize first letter of card status
  const capitalizeString = s => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  // make date readable
  const readableDate = date => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const d = new Date(date);
    return d.toLocaleDateString("en-US", options);
  }

  // unicode character
  const redCircle = "\uD83D\uDD34";

  return (
    <div className="list">
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>Cards</TableCell>
                    <TableCell align="left">Replies</TableCell>
                    <TableCell align="left">Status</TableCell>
                    <TableCell align="left">Date Created</TableCell>
                    <TableCell align="center">Options</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {cards.map((card) => (
                    <TableRow key={card.id}>
                    <TableCell component="th" scope="row" className={`list-${statusColor(card.status)}`}>
                    {<img src={card.image} height={50} />} {<div className="list-title">{card.title}</div>}
                    </TableCell>
                    <TableCell align="left">
                      {card.replies > 0 ? 
                        card.replies === 1 ? `${redCircle}  1 reply` : `${redCircle}  ${card.replies} replies` 
                      : '0 replies'
                      }
                    </TableCell>
                    <TableCell align="left">{capitalizeString(card.status)}</TableCell>
                    <TableCell align="left">{readableDate(card.date)}</TableCell>
                    <TableCell align="center" className="list-options">
                    <Tooltip 
                      title={
                          <React.Fragment>
                          <LinkIconSVG width={15}/>{'  '}
                          {'View Jogg'}
                        </React.Fragment>
                      }
                      componentsProps={{
                        tooltip: {
                          sx: {
                            bgcolor: 'white',
                            color: 'black',
                            border: '1px solid #dadde9',
                          },
                        },
                      }}
                    >
                      <Button>...</Button>
                    </Tooltip>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}

export default ListView;