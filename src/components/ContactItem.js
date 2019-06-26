import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Typography,
  IconButton
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    margin: 20,
    padding: 10
    // maxWidth: 345
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  media: {
    width: 30,
    height: 45,
    padding: '30px', // 16:9
    borderRadius: '50%',
    alignSelf: 'center'
  },
  content: {
    // padding: 0,
    alignSelf: 'center'
  },
  text: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const ContactItem = props => {
  const { item } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardHeader
          action={
            <IconButton color="default">
              <DeleteIcon />
            </IconButton>
          }
        />
        <CardMedia className={classes.media} image={item.photo} />
        {/* <Avatar className={classes.media} src={item.photo}></Avatar> */}
        {/* <img className={classes.media} src={item.photo}/> */}
        <CardContent className={classes.content}>
          <Typography component="h3" variant="body1" className={classes.text}>
            {item.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.text}
          >
            {item['dial-number']}
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            className={classes.text}
          >
            {item.email}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

// class ContactItem extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     console.log(this.props.item);

//     const classes = useStyles();
//     const [expanded, setExpanded] = React.useState(false);
//     return (
//       <Card className={classes.card}>
//         <CardHeader
//           avatar={
//             <Avatar aria-label="Recipe" className={classes.avatar}>
//               R
//             </Avatar>
//           }
//           action={
//             <IconButton aria-label="Settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title="Shrimp and Chorizo Paella"
//           subheader="September 14, 2016"
//         />
//         <CardMedia
//           className={classes.media}
//           image="/static/images/cards/paella.jpg"
//           title="Paella dish"
//         />
//         <CardContent>
//           <Typography variant="body2" color="textSecondary" component="p">
//             This impressive paella is a perfect party dish and a fun meal to
//             cook together with your guests. Add 1 cup of frozen peas along with
//             the mussels, if you like.
//           </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//           <IconButton aria-label="Add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="Share">
//             <ShareIcon />
//           </IconButton>
//           <IconButton
//             className={clsx(classes.expand, {
//               [classes.expandOpen]: expanded
//             })}
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//             aria-label="Show more"
//           >
//             <ExpandMoreIcon />
//           </IconButton>
//         </CardActions>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//           <CardContent>
//             <Typography paragraph>Method:</Typography>
//             <Typography paragraph>
//               Heat 1/2 cup of the broth in a pot until simmering, add saffron
//               and set aside for 10 minutes.
//             </Typography>
//             <Typography paragraph>
//               Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
//               over medium-high heat. Add chicken, shrimp and chorizo, and cook,
//               stirring occasionally until lightly browned, 6 to 8 minutes.
//               Transfer shrimp to a large plate and set aside, leaving chicken
//               and chorizo in the pan. Add pimentón, bay leaves, garlic,
//               tomatoes, onion, salt and pepper, and cook, stirring often until
//               thickened and fragrant, about 10 minutes. Add saffron broth and
//               remaining 4 1/2 cups chicken broth; bring to a boil.
//             </Typography>
//             <Typography paragraph>
//               Add rice and stir very gently to distribute. Top with artichokes
//               and peppers, and cook without stirring, until most of the liquid
//               is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
//               reserved shrimp and mussels, tucking them down into the rice, and
//               cook again without stirring, until mussels have opened and rice is
//               just tender, 5 to 7 minutes more. (Discard any mussels that don’t
//               open.)
//             </Typography>
//             <Typography>
//               Set aside off of the heat to let rest for 10 minutes, and then
//               serve.
//             </Typography>
//           </CardContent>
//         </Collapse>
//       </Card>
//     );
//   }
// }

ContactItem.defaultProps = {
  item: {}
};

ContactItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ContactItem;
