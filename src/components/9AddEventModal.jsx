import { createPortal } from "react-dom";
import "../css/9addEventModal.css";
import { useEffect, useRef, useState } from "react";
import "../css/6Events.css";

export function AddEventModal({
    search,
    setSearch,
    addList,
    setAddList,
    admin,
    setAdmin,
    activateEvent,
    setActivateModal,
}) {
    const ref = useRef(null);
    const getButton = useRef(null);
    const in1 = useRef(null);
    const in2 = useRef(null);
    const in3 = useRef(null);
    const in4 = useRef(null); // Для select
    const [jsons, setJson] = useState([]);

    useEffect(() => {
        fetch("/public/7cities.json")
            .then((x) => x.json())
            .then((value) => setJson(value));
    }, []);

    if (!document.getElementById("portal")) return null; // Перевірка на існування порталу

    function createMarkup() {
        setActivateModal({ in: false, up: false, another: false });
    
        if (
            in1.current.value !== "" &&
            in2.current.value !== "" &&
            in3.current.value !== "" &&
            in4.current.value !== ""
        ) {
            in1.current.style.fontSize = "40px";
            in1.current.style.textAlign = "center";
            
            // Оновлення списку подій
            setAddList((prevList) => (
                <>
                    {prevList}
                    <ul className="ulAddEventListName eventItem eventItem2">
                        <li className="addEventList" id="event_center">{in1.current.value}</li>
                        <li className="addEventList">{in2.current.value}</li>
                        <li className="addEventList">{in3.current.value}</li>
                        <li className="addEventList">{in4.current.value}</li>
                    </ul>
                </>
            ));
    
            // Затримка перед кліком, щоб дочекатися оновлення стану
            const selectedCity = in4.current.value; // Отримуємо вибране місто
            setTimeout(() => {
                const cityButtons = document.querySelectorAll(".li-cities");
                cityButtons.forEach((button) => {
                    if (button.textContent === selectedCity) {
                        button.click(); // Симулюємо клік по кнопці міста
                    }
                });
            }, 100); // 100 мс затримки
        } else {
            alert("Please fill in all fields!");
        }
    }

    return createPortal(
        <>
            <div className="darkWindow" ref={ref}>
                <div className="regisrateField">
                    <h1 className="addEvents">Add your event</h1>
                    <input type="text" ref={in1} placeholder="Name of event" />
                    <input type="text" ref={in2} placeholder="Description of event" />
                    <input type="text" ref={in3} placeholder="Add time" />

                    {/* Переміщений select */}
                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <select style={{ justifyContent: "center", width: "80%" }}
                            name="options"
                            id="select"
                            className="select"
                            ref={in4}
                        >
                            <option value="">Select a city</option>
                            {jsons.map((value, index) => (
                                <option key={index} value={value} className={`city ${value} option`}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        className="addEvent"
                        id="addEvents"
                        ref={getButton}
                        onClick={createMarkup}
                    >
                        Add event to the page
                    </button>
                </div>

                <img
                    onClick={() => setActivateModal({ in: false, another: false, up: false })}
                    className="exitImg"
                    src="/src/img/cross (1).png"
                    alt="exit img"
                />
            </div>
        </>,
        document.getElementById("portal")
    );
}
