import React from 'react'

import { ChartsHeader, LineChart } from '../../components';


const Line = () => {
  return (
    <div className="md-4 md:m-10 mt-24 p-10 bg-white dark:bd-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Line" title="Inflation Rate"/>
      <div className="w-full">
        <LineChart />

      </div>
    </div>
  )
}

export default Line