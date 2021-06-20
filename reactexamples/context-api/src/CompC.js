import React, { useContext }from 'react';
import { GlobalContext } from './GlobalContext'

function CompC() {
    const lang = useContext(GlobalContext)
    return (
        <div>
            <h1>The most popular javascript Framework  is { lang } </h1>
        </div>
    )
}

export default CompC;