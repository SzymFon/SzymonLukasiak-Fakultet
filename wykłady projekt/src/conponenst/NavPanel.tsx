import React from 'react';
import { Drawer} from '@material-ui/core';
import { useHistory } from 'react-router';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    drawer: {
        width: '10 rem',
    },
    menuIcon: {
        cursor: 'pointer',
        display: 'flex',
    }
});

const NavPanel = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    const history = useHistory();
    const classes = useStyles();
    
    const redirectTo =  (path: string, name: string) => <div onClick = {() => { history.push(path)}}> {name} </div>;

    return (
        <div>
            <div onClick={()=> setIsOpen(!isOpen)}><MenuIcon/></div>
            <Drawer
                open={isOpen}
                onClose = {()=> {setIsOpen(false)}}
            >
                <div>
                    <ul>
                        <li>{redirectTo('/', 'Home')}</li>
                        <li>{redirectTo('/movie', 'Movie')}</li>
                    </ul>
                </div>
            </Drawer>
        </div>
    );
}
export default NavPanel;