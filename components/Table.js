import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    container :{
        margin:"auto",
        display:'flex',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'90%'
    },
    table: {
        // minWidth: 650,
    },
    
});

function createData({name , gender , email , phone }) {
    
    const {first , last , title } = name
    return { first , last , title , gender , email , phone };
}



const UsersTable = ({data , onRowPress})=> {
    const classes = useStyles();
    const rows = data.results.map(res => createData(res))
    const columns = Object.keys(rows[0])
        
        
     
    

    return (
        <div className={classes.container}>
        <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                       { columns.map((res,key)=>{
                           return <TableCell align="left"  key={key}>{res}</TableCell>
                        })}
                       
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row,key) => (
                        <TableRow key={key} onClick={()=>onRowPress(key)} >
                            <TableCell align="left" component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="left">{row.first}</TableCell>
                            <TableCell align="left">{row.last}</TableCell>
                            <TableCell align="left">{row.gender}</TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}

export default UsersTable