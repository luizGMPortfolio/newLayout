import React, { useState } from 'react'
import explanation from '../data/explanation'

const Platafoms = () => {

    const [explain, setexplain] = useState(explanation[2][0])

    const change_explain = (num) => {
        setexplain(explanation[2][num]);
    }


    return (
        <div className='right'>
            <div>
                <h2>platafoms</h2>
            </div>
            <div className='plataforms'>
                <div>
                    <i class="fa-regular fa-window-maximize fa-xl"></i>
                    <ul>
                        <li onMouseMove={() => change_explain(0)}>
                            <i class="fa-brands fa-chrome"></i>
                            <span>Chrome</span>
                        </li>
                        <li onMouseMove={() => change_explain(1)}>
                            <i class="fa-brands fa-firefox-browser"></i>
                            <span>Firefox</span>
                        </li>
                        <li onMouseMove={() => change_explain(2)}>
                            <i class="fa-brands fa-opera"></i>
                            <span>Opera</span>
                        </li>
                        <li onMouseMove={() => change_explain(3)}>
                            <i class="fa-brands fa-edge"></i>
                            <span>Edge</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <i class="fa-solid fa-mobile-screen-button fa-xl"></i>
                    <ul>
                        <li onMouseMove={() => change_explain(4)}>
                            <i class="fa-brands fa-android"></i>
                            <span>Android</span>
                        </li>
                        <li onMouseMove={() => change_explain(5)}>
                            <i class="fa-brands fa-apple"></i>
                            <span>Apple</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <i class="fa-solid fa-desktop fa-xl"></i>
                    <ul>
                        <li onMouseMove={() => change_explain(6)}>
                            <i class="fa-brands fa-windows"></i>
                            <span>Windows</span>
                        </li>
                        <li onMouseMove={() => change_explain(7)}>
                            <i class="fa-brands fa-linux"></i>
                            <span>Linux</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='explain'>
                <div>
                    <h3>{explain.title}</h3>
                    <p>{explain.mensage}</p>
                </div>
            </div>
        </div>
    )
}

export default Platafoms