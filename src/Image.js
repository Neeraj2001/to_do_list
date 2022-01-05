import React from 'react';
import {makeStyles} from '@material-ui/styles';
const useStyles = makeStyles({
    image: {
        width: '380px',
  height:'200px',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  borderRadius: '15px 15px 0 0',
  position: 'relative',
    }
})
const Image = () => {
    const classes = useStyles();
    return (
        <div>
          <div >
          <img className = {classes.image} src='/gif/rain.gif' alt='rain' />  
          </div>
          <div>

          </div>
        </div>
    )
}
export default Image;