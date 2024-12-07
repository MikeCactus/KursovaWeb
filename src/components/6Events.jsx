import { useEffect, useState, useRef } from "react";
import "../css/6Events.css";
import { AddEventModal } from "./9AddEventModal";

export function Events({ search, setSearch, addList, setAddList, admin, setAdmin, activateEvent, setActivateModal }) {
    const [date, setDate] = useState([]);
    const ref = useRef(null);
    const [txt, setTxt] = useState("зареєструйтесь аби додати подію");

    /*useEffect(() => {
        fetch("/6event.json")
            .then((x) => x.json())
            .then((json) => setDate(json));
    }, []);*/

    useEffect(() => {
        validateButtonState();
    }, [admin]);

    function validateButtonState() {
        if (
            admin?.pIn?.trim() &&
            admin?.eIN?.trim() &&
            admin?.eUP?.trim() &&
            admin?.pUp?.trim()
        ) {
            if (admin.pIn === admin.pUp && admin.eIN === admin.eUP) {
                setTxt("додайте подію");
                if (ref.current) ref.current.disabled = false;
            } else {
                setTxt("зареєструйтесь аби додати подію");
                if (ref.current) ref.current.disabled = true;
            }
        } else {
            setTxt("зареєструйтесь аби додати подію");
            if (ref.current) ref.current.disabled = true;
        }
    }

    return (
        <>
            <div className="News_Events">
                <p className="newsP">
                    <span>Events</span>
                </p>

                <article className="articleEvents">
                    {date.map((value, index) => (
                        <div key={index} className="eventItem">
                            <h2 className="h2_events">{value.event_blog_h2}</h2>
                            <p className="h2_events">{value.dateTime}</p>
                            <p className="h2_events">{value.p}</p>
                            <p className="h2_events twocity">Kyiv</p>
                        </div>
                    ))}

                    {addList}

                    <button
                        className="addEventButton"
                        id="button"
                        ref={ref}
                        onClick={() =>
                            setActivateModal({ up: false, in: false, another: true })
                        }
                    >
                        {txt}
                    </button>
                </article>
            </div>

            {activateEvent.another === true ? (
                <AddEventModal
                    search={search}
                    setSearch={setSearch}
                    addList={addList}
                    setAddList={setAddList}
                    admin={admin}
                    setAdmin={setAdmin}
                    activateEvent={activateEvent}
                    setActivateModal={setActivateModal}
                />
            ) : null}
        </>
    );
}