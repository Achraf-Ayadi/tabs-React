import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoding] = useState(true)
  const [items, setItems] = useState([])
  const [value, setValue] = useState(0)

  const fetchItems = async () => {
    const response = await fetch(url)
    const items = await response.json()
    setItems(items)
    setLoding(false)
  }

  useEffect(() => {
    fetchItems()
  }, [])

  if (loading) {
    return (
      <section className='section loading'>
        <h2 className='loading'>...Loading</h2>
      </section>
    )
  }

  const { company, dates, duties, title } = items[value]

  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>

      <div className='jobs-center'>
        {/* btn container */}
        <div className='btn-container'>
          {items.map((item, index) => {
            return (
              <button
                className={`job-btn ${index === value && 'active-btn'}`}
                type='button'
                key={item.id}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className='job-info'>
          <h3> {title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>

          {duties.map((duty, index) => {
            return (
              <div className='job-desc' key={index}>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button type='button' className='btn'>
        more info
      </button>
    </section>
  )
}
export default App
