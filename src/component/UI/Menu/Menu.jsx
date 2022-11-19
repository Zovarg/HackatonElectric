import {NavLink} from "react-router-dom";
import classes from './Menu.module.css'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
const Menu = () => {
    return (
        <div>
                <div className={classes.navigation}>
                    <NavLink to="/map"  className={({ isActive }) =>
                        isActive ? classes.navigate_active : classes.navigate_inactive}>
                        <div className={classes.iconContainer}>
                            <div className={classes.iconHome}></div>
                            <div className={classes.description}>Главная</div>
                        </div>
                    </NavLink>
                    <NavLink to="/recomendation"  className={({ isActive }) =>
                        isActive ? classes.navigate_active : classes.navigate_inactive}>
                        <div className={classes.iconContainer}>
                            <div className={classes.iconFavourite}></div>
                            <div className={classes.description}>Избранное</div>
                        </div>
                    </NavLink>
                    <NavLink to="/posts"  className={({ isActive }) =>
                        isActive ? classes.navigate_active : classes.navigate_inactive}>
                        <div className={classes.iconContainer}>
                            <div className={classes.iconBooking}></div>
                            <div className={classes.description}>Букинг</div>
                        </div>
                    </NavLink>
                    <NavLink to="/profile"  className={({ isActive }) =>
                        isActive ? classes.navigate_active : classes.navigate_inactive}>
                        <div className={classes.iconContainer}>
                            <div className={classes.iconProfile}></div>
                            <div className={classes.description}>Профиль</div>
                        </div>
                    </NavLink>

                </div>
        </div>

    )
}

export default Menu