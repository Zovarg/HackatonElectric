import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Grid,
  makeStyles,
  Container,
  Button,
  Typography,
} from "@material-ui/core";
import cl from './login.module.css'
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import logo from '../../images/Preview.svg';
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  but: {
    background: '#255ba3',
  },
}));

function Login() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const nav = useNavigate();
  function goToAdmin(){
    nav("/admin");
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    goToAdmin()
    try {
      setIsLoading(true);
      let info=data.data
      console.log({'user':{...data}})
      const { data: loginData } = await api.auth.login({'user':{...data}});
      console.log(loginData)
      auth.setToken(loginData.token);
      /*auth.setRefreshToken(loginData.refresh)
      const { data: userData } = await api.auth.getProfile();
      auth.setUser(userData);*/
    } catch (e) {
      if (e.response.status) {
        console.log('ЧТо-то')
        console.log(e.response.status)
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (

    <Container maxWidth="xs" className={classes.root}>
      <div className={cl.logo}>
        <img alt="logo" src={logo}/>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
                name="email"

                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        error={Boolean(errors.username?.message)}
                        fullWidth={true}
                        label="Логин"
                        variant="filled"
                        helperText={errors.username?.message}

                    />
                )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        error={Boolean(errors.password?.message)}
                        type="password"
                        fullWidth={true}
                        label="Пароль"
                        variant="filled"
                        helperText={errors.password?.message}
                    />
                )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isLoading}
              className={classes.but}
            >
              Авторизоваться
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Login;
