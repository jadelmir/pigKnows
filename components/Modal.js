import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Avatar from './Avatar'
import moment from 'moment' 
import Divider from '@material-ui/core/Divider';


function getModalStyle() {
    const top = 50 
    const left = 50 

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: '60%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    container : {
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}));

export default function SimpleModal({isModalOpen , closeModal , userData}) {
    const classes = useStyles();
    
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(isModalOpen);
    useEffect(()=>{
        setOpen(isModalOpen)
    },[isModalOpen])
   
    const handleClose = () => {
        closeModal()
    };
    const getDateDiff= (date) =>{
        let formatedDate = moment(date).format()
        return moment(formatedDate).fromNow();
    }
    const UserDetails = () => {
        const { picture, name, dob, email, gender, phone, location, registered} = userData
        let dateRegistered = getDateDiff(registered.date) 

        const {title , first , last} = name
        const fullName = title + ' ' +first +' '+ last 
        return <div style={modalStyle} className={classes.paper}>
            < div className={classes.container}>
                <div>
                    <Avatar alt={fullName} url={picture.large} />
                </div>
                <Divider orientation="vertical" variant="middle"/>
                <div>
                    <p> {fullName}  -- {dob.age} </p>
                    <p> {email} </p>
                    <p> {gender} </p>
                    <p>{phone} </p>
                    <p>{location.country} ,  { location.city }</p>
                    <p> Date Registered : {dateRegistered} </p>
                </div>
            </div>

        </div>
    }

    
    return (
        <div>
            <Modal
            open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {userData ? <UserDetails data = {userData} /> : <div>no data</div>}
            </Modal>
        </div>
    );
}


