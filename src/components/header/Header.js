import Button from '@material-ui/core/Button';
import {AppBar, Container, Toolbar, Typography, Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}))

export default function Header() {

  const classes = useStyles();

  let [open, setOpen] = useState(false);

  const handleClickOpen = () =>{
    setOpen(true)
  };

  const handleClose = () =>{
    setOpen(false)
  }

  return (
      <AppBar>
        <Container>
          <Toolbar>
            <Typography className={classes.title} variant={'h5'}>Movies App</Typography>
            <Box mr={3}>
              <Button color={"inherit"} variant={"outlined"} onClick={handleClickOpen}>Log In</Button>

              <Dialog open={open} onClose={handleClose} aria-labelledby={'registration'}>
                <DialogTitle id={'registration'}>Log In</DialogTitle>
                <DialogContent>
                  <TextField
                  autofocus
                  margin="dense"
                  id="name"
                  lable="Email"
                  type="email"
                  fullwidth/>

                  <TextField
                      autofocus
                      margin="dense"
                        id="pass"
                        lable="Password"
                        type="password"
                        fullwidth/>
                </DialogContent>

                <DialogActions>
                  <Button onClick={handleClose} color={'primary'}>Cancel</Button>
                  <Button onClick={handleClose} color={'primary'}>Log in</Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
}