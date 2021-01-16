import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import SubjectIcon from '@material-ui/icons/Subject';
import CodeIcon from '@material-ui/icons/Code';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link to="/About">
                    <ListItem button key={"AboutMe"}>
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                        <ListItemText primary={"About Me"} />
                    </ListItem>
                </Link>
                <Link to="/Education">
                    <ListItem button key={"Education"}>
                        <ListItemIcon><SubjectIcon /></ListItemIcon>
                        <ListItemText primary={"Education"} />
                    </ListItem>
                </Link>
                <Link to="/Portfolio">
                    <ListItem button key={"Portfolio"}>
                        <ListItemIcon><CodeIcon /></ListItemIcon>
                        <ListItemText primary={"Portfolio"} />
                    </ListItem>
                </Link>
                <Link to="/Contact">
                    <ListItem button key={"ContactMe"}>
                        <ListItemIcon><AlternateEmailIcon /></ListItemIcon>
                        <ListItemText primary={"Contact"} />
                    </ListItem>
                </Link>
            </List>
            {/* <Divider /> */}
        </div>
    );

    return (
        <div className="SideMenu">

            <Button onClick={toggleDrawer('right', true)}><MenuIcon className="float-right text-white" /></Button>
            <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                {list('right')}
            </Drawer>
        </div>
    );
}