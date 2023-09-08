import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao () {
    return (
        <>
            <Banner />
            <Outlet />
        </>
    )
}