import React from 'react'
import { useAllocationContext } from '../context/AllocationContext'

const Info = () => {
  const { playersData, selectedTeamName} = useAllocationContext()
    const teamMemberCount = (playersData.filter((f) => f.teamName === selectedTeamName)).length;
  
    return (
      <header className="container">
        <div className="row justify-content-center mt-3 mb-4">
          <div className="col-8">
            <h1 className='text-center'>Team Member Allocation</h1>
            <h3 className='text-center'>{selectedTeamName} has {teamMemberCount} {teamMemberCount === 1 ? 'Member' : 'Members'}</h3>
          </div>
        </div>
      </header>
  )
}

export default Info