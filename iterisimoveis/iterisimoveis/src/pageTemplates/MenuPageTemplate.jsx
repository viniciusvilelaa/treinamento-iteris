import React from "react";
    import { makeStyles } from "@material-ui/core/styles";
    import AppBar from "@material-ui/core/AppBar";
    import Toolbar from "@material-ui/core/Toolbar";
    import Typography from "@material-ui/core/Typography";
    import IconButton from "@material-ui/core/IconButton";
    import MenuIcon from "@material-ui/icons/Menu";
    import Drawer from "@material-ui/core/Drawer";
    import List from "@material-ui/core/List";
    import Divider from "@material-ui/core/Divider";
    import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
    import ListItem from "@material-ui/core/ListItem";
    import ListItemIcon from "@material-ui/core/ListItemIcon";
    import ListItemText from "@material-ui/core/ListItemText";
    import HomeIcon from "@material-ui/icons/Home";
    import FlagIcon from "@material-ui/icons/Flag";
    import StoreIcon from "@material-ui/icons/Store";
    import CreateIcon from "@material-ui/icons/Create";
    import { NavLink } from "react-router-dom";

    const useStyles = makeStyles((theme) => ({
      list: {
        width: 250,
      },
      drawerHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      },
      main: {
        padding: theme.spacing(3),
      },
    }));

    export default function MenuPageTemplate(props) {
      const classes = useStyles();

      const [open, setOpen] = React.useState(false);

      const handleDrawerOpen = () => {
        setOpen(true);
      };

      const handleDrawerClose = () => {
        setOpen(false);
      };

      return (
        <div>
          <AppBar position="sticky">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">Iteris Imóveis</Typography>
            </Toolbar>
          </AppBar>
          <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
            <div className={classes.list}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItem component={NavLink} to="/">
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem component={NavLink} to="/imoveis/cadastro">
                  <ListItemIcon>
                    <CreateIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cadastrar Novo" />
                </ListItem>
                <ListItem component={NavLink} to="/imoveis">
                  <ListItemIcon>
                    <StoreIcon />
                  </ListItemIcon>
                  <ListItemText primary="Imóveis" />
                </ListItem>
                <ListItem component={NavLink} to="/sobre">
                  <ListItemIcon>
                    <FlagIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sobre" />
                </ListItem>
              </List>
            </div>
          </Drawer>
          <main className={classes.main}>
            <div className="ConteudoPrincipalAQUI">{props.children}</div>
          </main>
        </div>
      );
    }