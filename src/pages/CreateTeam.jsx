import React from 'react'
import TeamAllMembers from '../components/TeamAllMembers'
import TeamOption from '../components/TeamOption'

const CreateTeam = () => {
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-6 text-center my-4">
            <TeamOption/>
            </div>
        </div>

        <div className="row justify-content-center">
            <div className="col-8 text-center my-4">
                <TeamAllMembers/>
            </div>
        </div>
    </div>
  )
}

export default CreateTeam