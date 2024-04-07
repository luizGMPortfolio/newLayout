import React, { useState } from 'react'
import explanation from '../data/explanation'

const Languages = () => {

    const [explain, setexplain] = useState(explanation[0][0])

    const change_explain = (num) => {
        setexplain(explanation[0][num]);
    }
    return (
        <div className='right'>
            <div>
                <h2>languages</h2>
            </div>
            <div>
                <div className='languages'>
                    <i class="fa-brands fa-react fa-2xl" onMouseMove={() => change_explain(0)}></i>
                    <i class="fa-brands fa-html5 fa-2xl" onMouseMove={() => change_explain(1)}></i>
                    <i class="fa-brands fa-css3 fa-2xl" onMouseMove={() => change_explain(2)}></i>
                    <i class="fa-brands fa-square-js fa-2xl" onMouseMove={() => change_explain(3)}></i>
                    <i class="fa-brands fa-python fa-2xl" onMouseMove={() => change_explain(4)}></i>
                    <i class="fa-brands fa-node fa-2xl" onMouseMove={() => change_explain(5)}></i>
                    <i class="fa-brands fa-java fa-2xl" onMouseMove={() => change_explain(6)}></i>
                    <i class="fa-brands fa-vuejs fa-2xl" onMouseMove={() => change_explain(7)}></i>
                    <i class="fa-brands fa-angular fa-2xl" onMouseMove={() => change_explain(8)}></i>
                    <i class="fa-brands fa-php fa-2xl" onMouseMove={() => change_explain(9)}></i>
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

export default Languages


