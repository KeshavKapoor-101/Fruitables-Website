import { Outlet } from "react-router-dom";
import SectionHeader from "./components/sectionshome/SectionHeader";
import SectionFooter from "./components/sectionshome/SectionFooter";

export default function Layout()
{
    return(
        <main>
            <SectionHeader />
            <Outlet />
            <SectionFooter/>

        </main>
    );
}