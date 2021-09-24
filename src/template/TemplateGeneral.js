import { Fragment } from "react";
import Header from "./Header";

export default function TemplateGeneral(props) {
    console.log(props.children)
    return (
        <>
            <Header />
            {props.children}
            <footer>Front End 3 - Digital House, 2021.</footer>
        </>
    )
}