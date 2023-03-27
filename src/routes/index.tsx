import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/home";
import { Layout } from "../components/layout";
import { Aplication } from "../pages/application";
import { TwoCellos } from "../components/artists/TwoCellos";
import { HeitorVillaLobos } from "../components/artists/HeitorVillarLobos";
import {Lindsay} from "../components/artists/Lidsay";
import { BrSinfonica } from "../components/artists/BrSinfonica";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="/application" element={<Aplication />}/>
                    <Route path={"/BrSinfonica"} element={<BrSinfonica/>}/>
                    <Route path={"/TwoCellos"} element={<TwoCellos/>}/>
                    <Route path={"/HeitorVillaLobos"} element={<HeitorVillaLobos/>}/>
                    <Route path={"/LindsayStirling"} element={<Lindsay/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}