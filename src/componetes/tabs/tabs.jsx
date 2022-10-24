import React from "react";
import { useState } from "react";
import TabPerfil from "./todastabs/tabPerfil";
import TabPortfolio from "./todastabs/tabPortifolio";

import "../tabs/tabs.css"


const TabsPortfolio = () => {
    const [activeTab, setActiveTab] = useState('Perfil');

    const mudarTabPerfil = () =>{
        setActiveTab("Perfil");
    }
    const mudarTabPortfolio = () =>{
        setActiveTab("Portfolio");
    }

    return (
        <section className="Tabs">
            <header className="tabs-header">
                <ul className="nav">
                    <li className={activeTab === 'Perfil' ? "active" : ""} onClick={mudarTabPerfil} > Perfil</li>
                    <li className={activeTab === 'Portfolio' ? "active" : ""} onClick={mudarTabPortfolio} > Portfólio </li>
                </ul>
            </header>
            <section className="outlet">
                {activeTab === 'Perfil' ? <TabPerfil /> : <TabPortfolio /> }
            </section>
        </section>

    )
}

export default TabsPortfolio;