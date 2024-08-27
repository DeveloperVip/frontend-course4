import React from 'react'
import ReportHeader from '../../components/Report/ReportHeader'
import ReportSection from '../../components/Report/ReportSection'
import Pagination from '../../components/Pagination/Pagination'

const ReportPage = () => {
  return (
    <div className='p-10 flex flex-col gap-5'>
        <ReportHeader/>
        <ReportSection/>
        <Pagination/>
    </div>
  )
}

export default ReportPage