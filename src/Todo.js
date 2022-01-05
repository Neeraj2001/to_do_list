import React from 'react';
import {Container, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles';
import Image from './Image';
const useStyles = makeStyles({
    image: {
        width: '400px',
        // margin: '100px',
        // align: 'center',
        display: 'flex',
    }
})
const Todo = () => {
    const classes = useStyles();
    return (
        <div>
         <Image />
        </div>
    )
}
export default Todo;