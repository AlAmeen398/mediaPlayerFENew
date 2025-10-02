import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchHistory, getHistory } from '../services/allApi'
import { Button } from 'react-bootstrap'

function WatchHistory() {
  const [allHistory, setAllHistory] = useState([])
  const getAllHistory = async () => {
    const resp = await getHistory()
    console.log("History", resp);
    const { data } = resp
    setAllHistory(data)
  }
  const deleteHistory = async (id) => {
    await deleteWatchHistory(id)
    getAllHistory()
  }
  useEffect(() => {
    getAllHistory()
  }, [])

  return (
    <>
      <div className="container d-flex justify-content-between">
        <h3 className='text-style'>WATCH HISTORY</h3>
        <Link className='text-style' style={{ textDecoration: 'NONE' }}><i className='fa-solid fa-arrow-left me-3'></i> BACK TO HOME</Link>
      </div>
      <table className='text-style table mt-5 mb-5 container' data-bs-theme='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>CAPTION</th>
            <th> URL</th>
            <th> TIME</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            allHistory.length > 0 ?
              allHistory.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.caption}</td>
                  <td>{item.embededLink}</td>
                  <td>{item.timeStamp}</td>
                  <td><Button variant='danger'><i className='fa-solid fa-trash ' onClick={() => deleteHistory(item.id)}></i></Button></td>
                </tr>
              )) :
              <p>NO HISTORY FOUND</p>
          }

        </tbody>
      </table>
    </>
  )
}

export default WatchHistory