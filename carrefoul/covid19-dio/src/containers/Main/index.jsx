/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useState, useCallback } from "react";
import { useEffect } from "react";
import { ContainerStyled } from "./style";
import Board from './components/Board'
import Panel from './components/Panel'

import Api from '../../api'

function Main() {
    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')
    const updateAt = new Date().toLocaleString()

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
            .then(data => setData(data))
    })

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    const handleChange = ({target}) => {
        const country = target.value
        setCountry(country)
    }

    return (
        <ContainerStyled>
            <div className="mb-2">
                <Panel
                    data={data}
                    updateAt={updateAt}
                    onChange={handleChange}
                    country={country}
                    getCovidData={getCovidData}
                />
            </div>
            <Board data={data} />
        </ContainerStyled>
    )
}

export default memo(Main)