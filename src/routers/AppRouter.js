import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AnimeScreen } from "../components/Anime/AnimeScreen";
import { DetailAnimeScreen } from "../components/DetailAnime/DetailAnimeScreen";

import { DrawerScreen } from "../components/Drawer/DrawerScreen";
import { FavoritesAnime } from "../components/FavoritesAnime/FavoritesAnime";

import { NavbarScreen } from "../components/Navbar/NavbarScreen";
import { NotFoundScreen } from "../components/NotFound404/NotFoundScreen";

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div className="main_wrapper">
                    <DrawerScreen/>
                    <div className="streaming_wrapper">
                        <NavbarScreen/>
                        <Switch>
                            <Route exact path="/">
                                <AnimeScreen/>
                            </Route>
                            <Route exact path="/listaFavoritos">
                                <FavoritesAnime/>
                            </Route>
                            <Route path="/:id" >
                                <DetailAnimeScreen/>
                            </Route>
                            <Redirect to="/" />
                            <Route exact path="*">
                                <NotFoundScreen/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    )
}
