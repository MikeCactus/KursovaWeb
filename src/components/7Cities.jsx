import { useLayoutEffect, useState } from "react";
import "../css/7Cities.css";

export function CitiesBlock({ search, setSearch }) {
    const [json, setJson] = useState([]);

    function click(event) {
        const selectedCity = event.target.textContent; // Вибране місто
        setSearch({ city: selectedCity });

        // Отримуємо всі елементи з подіями
        const eventItems = document.getElementsByClassName("eventItem2");

        for (let i = 0; i < eventItems.length; i++) {
            // Знаходимо місто для кожної події
            const eventCity = eventItems[i]
                .querySelector(".addEventList:last-child")
                .textContent;

            // Порівнюємо місто події з вибраним містом і приховуємо/показуємо подію
            eventItems[i].style.display =
                eventCity === selectedCity ? "flex" : "none";
        }
    }

    useLayoutEffect(() => {
        fetch("/public/7cities.json")
            .then((x) => x.json())
            .then((x) => setJson(x));
    }, []);

    return (
        <>
            <h1 className="h1-Cities">Cities:</h1>
            <ul className="ul-cities">
                {json.map((value, index) => (
                    <li className="li-cities" key={index} onClick={click}>
                        {value}
                        <p className="hover-line"></p>
                    </li>
                ))}
            </ul>
        </>
    );
}
