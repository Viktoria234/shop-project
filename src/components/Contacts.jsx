import React from "react";

const Contacts = () =>{
    return(
        <div className="contacts">
            <div className="contacts-br">
                <h1>Наши контакты</h1>
                <p>random@gmail.com</p>
                <p>+7 707 888 6432</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="rgb(7, 0, 102)" class="bi bi-usb-symbol" viewBox="0 0 16 16">
                    <path d="m7.792.312-1.533 2.3A.25.25 0 0 0 6.467 3H7.5v7.319a2.5 2.5 0 0 0-.515-.298L5.909 9.56A1.5 1.5 0 0 1 5 8.18v-.266a1.5 1.5 0 1 0-1 0v.266a2.5 2.5 0 0 0 1.515 2.298l1.076.461a1.5 1.5 0 0 1 .888 1.129 2.001 2.001 0 1 0 1.021-.006v-.902a1.5 1.5 0 0 1 .756-1.303l1.484-.848A2.5 2.5 0 0 0 11.995 7h.755a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h.741a1.5 1.5 0 0 1-.747 1.142L8.76 8.99a3 3 0 0 0-.26.17V3h1.033a.25.25 0 0 0 .208-.389L8.208.312a.25.25 0 0 0-.416 0"/>
                </svg>
            </div>
        </div>
    )
}

export default Contacts;