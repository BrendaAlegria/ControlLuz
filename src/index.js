import React from "react";
import ReactDom from "react-dom/client";
import { Contador } from "./components/Contador";
import { Texto } from "./components/Texto";
import { Estado } from "./components/Estado";
import { LuzControl } from "./components/Luz";

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
    <Contador/>
    <Texto/>
    <Estado/>
    <LuzControl/>
    </>
)