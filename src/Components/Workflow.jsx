import React, { useState } from 'react'
import explanation from '../data/explanation'

const Workflow = () => {

    const [explain, setexplain] = useState(explanation[3][0])

    const change_explain = (num) => {
        setexplain(explanation[3][num]);
    }
    return (
        <div className='right'>
            <div>
                <h2>workflow</h2>
            </div>
            <div className='workflow'>
                <ul>
                    <li className='passo w-um' onMouseMove={() => change_explain(0)}>
                        Requirements
                    </li>
                    <i class="fa-solid fa-circle fa-sm" id='c1'></i>
                    <li className='passo w-dois' onMouseMove={() => change_explain(1)}>
                        Design
                    </li>
                    <i class="fa-solid fa-circle fa-sm" id='c2'></i>
                    <li className='passo w-tres' onMouseMove={() => change_explain(2)}>
                        Development
                    </li>
                    <i class="fa-solid fa-circle fa-sm" id='c3'></i>
                    <li className='passo w-quatro' onMouseMove={() => change_explain(3)}>
                        Refine
                    </li>
                    <i class="fa-solid fa-circle fa-sm" id='c4'></i>
                    <li className='passo w-cinco' onMouseMove={() => change_explain(4)}>
                        Aprove
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

export default Workflow