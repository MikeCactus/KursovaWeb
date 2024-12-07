import { useState } from "react";
import "../css/4nav-panel.css";
import { Modal } from "./8Mzodal";

export function Navpanel2({admin,setAdmin ,activateModal,setActivateModal }) {
    return (
        <>
            <div className = "header-panel">
                <h3
                    className = "signIn"
                    onClick = {() => setActivateModal({ another: false, in: true, up: false })}
                >
                    Sign Up
                </h3>
                <h3
                    className = "signUp"
                    onClick = {() => setActivateModal({ another: false, in: false, up: true })}
                >
                    Sign In
                </h3>
            </div>

            <Modal
                admin = {admin} 
                setAdmin = {setAdmin}
                elId = "portal"
                activateModal = {activateModal}
                setActivateModal = {setActivateModal}   
            />
        </>
    );
}
