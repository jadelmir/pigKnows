import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  UserTable   from "../components/Table";
import { useEffect, useState } from 'react';
import { useFetchUsers} from './api/Fetch'
import Loader from '../components/Loader'
import Fab from '@material-ui/core/Fab';
import RefreshIcon from '@material-ui/icons/Refresh';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '../components/Modal'
const useStyles = makeStyles(theme => ({
  container : {
    width:'100%'
  },
  fabStyle: {
    display:'flex',
    flex: 1 ,
    alignItems:'center',
    justifyContent:'center',
    margin:10
  },
 
  test : {
    backgroundColor: "green",

  }
}));

 const Home = () =>{

   let api = 'https://randomuser.me/api/?results=5'
   const [ refresh , setRefresh] = useState(false)
   const [isModalOpen , setisModalOpen] = useState(false)
    const [selectedUser , setSelectedUser]= useState(null)
   const [users, loading, hasError] = useFetchUsers(api, refresh)
   const classes = useStyles();
   const RefreshPage = ()=>{
     setRefresh(!refresh)
   }
   
   const onRowPress = (id)=>{
    setisModalOpen(true)
     setSelectedUser(users.results[id])
   }
   const onCloseModal = ()=>{
     setisModalOpen(false)
     setSelectedUser(null)
   }
  return (
  
    <div >
      <div >
        <div className={classes.fabStyle}>
          <Fab color="primary" aria-label="refresh" onClick={RefreshPage}>
            <RefreshIcon />
          </Fab>
        </div>
        {loading ? <Loader/> : null }
        {users ? <UserTable data={users} onRowPress={onRowPress} /> : null}
        <Modal isModalOpen={isModalOpen} closeModal={onCloseModal}  userData={selectedUser} />
        
       
      </div>
     
    </div>
  )
}
export default Home

