import { createPortal } from "react-dom";
import "../css/8Modal.css";
import { useEffect, useRef, useState } from "react";

export function Modal({ admin, setAdmin, elId, activateModal, setActivateModal }) {
    const [json, setJson] = useState([]);
    const refInput1 = useRef(null);
    const refInput2 = useRef(null);
    const refInput3 = useRef(null);
    const refInput4 = useRef(null);
    const refInput5 = useRef(null);
    const refInput6 = useRef(null);

    // Завантаження даних з JSON
    useEffect(() => {
        fetch("/public/8modals.json")
            .then((res) => res.json())
            .then((data) => setJson(data))
            .catch((err) => console.error("Error fetching modal data:", err));
    }, []);

    // Перевірка наявності елемента для порталу
    const portalElement = document.getElementById(elId);
    if (!portalElement) {
        console.error(`Element with id "${elId}" not found.`);
        return null;
    }

    function fillText(refs) {
        const id = refs.current.id;
        const value = refs.current.value;

        setAdmin((prevAdmin) => {
            switch (id) {
                case '1': return { ...prevAdmin, name: value };
                case '2': return { ...prevAdmin, phone: value };
                case '3': return { ...prevAdmin, eIN: value };
                case '4': return { ...prevAdmin, pIn: value };
                case '5': return { ...prevAdmin, eUP: value };
                case '6': return { ...prevAdmin, pUp: value };
                default: return prevAdmin;
            }
        });
    }

    function clickButton() {
        console.log('Final admin data:', admin);
        

    }

    const modalContent = json.map((value, index) => {
        if (activateModal.in && index === 0) {
            return (
                <section key={index} className="panel-mode">
                    <div className="registrate">
                        <h2 className="regTxt">{value.header}</h2>
                        <input type="text" id="1" ref={refInput1} placeholder={value.name} onInput={() => { fillText(refInput1); }} />
                        <input type="phone" id="2" ref={refInput2} placeholder={value.phone} onInput={() => { fillText(refInput2); }} />
                        <input type="email" id="3" ref={refInput3} placeholder={value.email} onInput={() => { fillText(refInput3); }} />
                        <input type="password" id="4" ref={refInput4} placeholder={value.password} onInput={() => { fillText(refInput4); }} />

                        <button
                            className="create"
                            id="modal"
                            onClick={() => {
                                setActivateModal((prevState) => ({ ...prevState, in: false }));
                                clickButton();
                            }}
                        >
                            {value.button}
                        </button>
                        <img
                            id="unique"
                            width="50px"
                            height="50px"
                            src="/src/img/cross (1).png"
                            alt="exit"
                            onClick={() => {
                                setActivateModal((prevState) => ({ ...prevState, in: false }));
                            }}
                        />
                    </div>
                </section>
            );
        }

        if (activateModal.up && index === 1) {
            return (
                <section key={index} className="panel-mode">
                    <div className="registrate" id="register">
                        <h2 className="regTxt">{value.header}</h2>
                        <input id="5" ref={refInput5} type="email" placeholder={value.email} onInput={() => { fillText(refInput5); }} />
                        <input id="6" ref={refInput6} type="password" placeholder={value.password} onInput={() => { fillText(refInput6); }} />
                        <button
                            className="create"
                            id="modal"
                            onClick={() => {
                                setActivateModal((prevState) => ({ ...prevState, up: false }));
                                clickButton();
                            }}
                        >
                            {value.button}
                        </button>
                        <img
                            id="unique"
                            width="50px"
                            height="50px"
                            src="/src/img/cross (1).png"
                            alt="exit"
                            onClick={() => {
                                setActivateModal((prevState) => ({ ...prevState, up: false }));
                            }}
                        />
                    </div>
                </section>
            );
        }

        return null;
    });

    // Повертаємо портал, щоб рендерити модалку в потрібному місці
    return createPortal(modalContent, portalElement);
}
