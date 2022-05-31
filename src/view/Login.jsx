import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
export default function Login(){
    return <div className='flex-d w-50'>
        <TextField variant="outlined" placeholder='ID' fullWidth></TextField>
        <TextField variant="outlined" placeholder='Password' fullWidth></TextField>
        <Link to='home'><Button variant='outlined' fullWidth>Login</Button></Link>
    </div>
}