import React, { Fragment } from 'react';

// React router.
import { Route, Redirect, Switch } from 'react-router-dom';

// Routes.
import { ROUTES } from '../../utils';

// Components.
import { NavBar } from '../components';

// Views.
import { Home } from './home/home';
import { PastTrials } from './past-trials/past-trials';
import { HowItWorks } from './how-it-works/how-it-works';
import { Authentication } from './authentication/authentication';
// import { Error404 } from '../error404/error404';

/**
 * Enrutador que se encarga de hacer el renderizado segun la ruta de navegación
 * actual. Adicionalmente para cada ruta se renderizara la barra de navegación de
 * la applicación. En caso de que el enrutador no logre discernir que vista se ha
 * de renderizar le mostrara al usuario la pantalla de 404.
 */
export const ClientRouter = () => {
    return (
        <Fragment>
            <NavBar />
            <main>
                <Switch>
                    <Route exact path={ROUTES.CLIENT.BASE} render={() => <Redirect to={ROUTES.CLIENT.HOME} />} />
                    <Route exact path={ROUTES.CLIENT.HOME} component={Home} />
                    <Route exact path={ROUTES.CLIENT.PAST_TRIALS} component={PastTrials} />
                    <Route exact path={ROUTES.CLIENT.HOW_IT_WORKS} component={HowItWorks} />
                    <Route exact path={ROUTES.CLIENT.AUTHENTICATION} component={Authentication} />
                    {/* <Route path="/" component={Error404} /> */}
                </Switch>
            </main>
        </Fragment>
    );
};
