import React from 'react'
import '../SectionHeading/SectionHeading.css'

const SectionHeading = ({classAdiHeader,classAdih4,classAdih2,sectionHeadingh4,sectionHeadingh2 , classAdiDivider }) => {

  return (
    <header className={`section-heading ${classAdiHeader}`}>
        <h4  className={`section-heading_h4  ${classAdih4}`} >{sectionHeadingh4}</h4>
        <h2  className={`section-heading_h2  ${classAdih2}`} >{sectionHeadingh2}</h2>
        <div className={classAdiDivider}></div>
    </header>
  )
}

export default SectionHeading