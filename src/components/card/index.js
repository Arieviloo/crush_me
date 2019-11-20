// import React from 'react';

// export default function card() {
//   return (
//     <div className="card">
//       <div className="card-top">
//         <span style={{}}>Name</span>
//       </div>
//       <div className="card-content"></div>

//     </div>
//   );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import './style.css'

const useStyles = makeStyles({
  card: {
    marginTop: 100,
    minWidth: 300,
    textAlign: 'left'
  },
  pos: {
    marginBottom: 12,
  },
  icon: {
    cursor: 'pointer',
    position: "relative",
    left: 310,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.icon} >

          <i className="fas fa-pen" 
            onClick={props.edit}
          ></i>
          <i className="fas fa-times"
            style={{paddingLeft: 10}}
            onClick={props.del}
          ></i>
        
        </div>
        <Typography variant="h5" component="h2" gutterBottom>
          {props.nome}
        </Typography>
        <Typography variant="h6" component="h2">
          Como conheci:
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.conheci}
        </Typography>
        <Typography variant="h6" component="h2">
          Qualidades:
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.qualidade}
        </Typography>
      </CardContent>
     
    </Card>
  );
}