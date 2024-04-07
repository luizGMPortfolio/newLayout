import React, { useState } from 'react'
import explanation from '../data/explanation'

const Style = () => {

    const [explain, setexplain] = useState(explanation[1][0])

    const change_explain = (num) => {
        setexplain(explanation[1][num]);
    }

    return (
        <div className='right'>
            <h2>Styles</h2>
            <div className='style'>
                <ul>
                    <li onMouseMove={() => change_explain(0)}>
                        <i class="fa-solid fa-check fa-xl"></i>
                        Apps
                    </li>
                    <li onMouseMove={() => change_explain(1)}>
                        <i class="fa-solid fa-check fa-xl"></i>
                        Landing page
                    </li>
                    <li onMouseMove={() => change_explain(2)}>
                        <i class="fa-solid fa-check fa-xl"></i>
                        portfolio
                    </li>
                    <li onMouseMove={() => change_explain(3)}>
                        <i class="fa-solid fa-check fa-xl"></i>
                        automation
                    </li>
                    <li onMouseMove={() => change_explain(4)}>
                        <i class="fa-solid fa-check fa-xl"></i>
                        Blogs
                    </li>
                    <li onMouseMove={() => change_explain(5)}>
                        <i class="fa-solid fa-check fa-xl"></i>
                        E-commerce
                    </li>
                    <li onMouseMove={() => change_explain(6)}>
                        <i class="fa-solid fa-check fa-xl"></i>
                        Api's
                    </li>
                </ul>
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

export default Style