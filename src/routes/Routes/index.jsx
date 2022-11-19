import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Profile from "../../pages/Profile";
import NotFound from "../../pages/NotFound";
import useAuth from "../../hooks/useAuth";
import GuestRoute from "../components/GuestRoute";
import {
  CircularProgress,
  makeStyles,
  Container,
  Grid,
} from "@material-ui/core";
import Admin from "../../pages/Admin/Admin";
import AdminRoute from "../components/AdminRoute";
import Maper from "../../pages/Map/Maper";
import EditProfile from "../../pages/EditProfile/editProfile";
import ListCars from "../../pages/ListCars/listCars";
import CarInfo from "../../pages/CarInfo/carInfo";
import FormSend from "../../pages/FormSend/formSend";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function AppRoutes() {
  const classes = useStyles();
  const auth = useAuth();

  return auth.isLoaded ? (
    <Routes>

        <Route path="/login" element={
            <Login />
        } />
        <Route path="/editor-profile" element={
            <EditProfile/>
        } />
        <Route path="/cars-list" element={
            <ListCars/>
        } />
      <Route path="/" element={
          <GuestRoute>
              <Home />
          </GuestRoute>

      } />
        <Route path="/admin" element={

            <AdminRoute>
                <Admin />
            </AdminRoute>

        } />
        <Route
            path="/map"
            element={
                    <Maper/>
            }
        />
        <Route
            path="/info-car"
            element={
                <CarInfo/>
            }
        />
        <Route
            path="/form-car"
            element={
                <FormSend/>
            }
        />
      <Route
        path="/profile"
        element={
            <Profile />
        }
      />

      <Route path="/not-found-404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found-404" />} />
    </Routes>
  ) : (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item>
          <CircularProgress color="inherit" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AppRoutes;
