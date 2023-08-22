import React from 'react'
// import './DashContent.css'
function DashContent() {
  return (
   <div className="dashContent">
        <div className="overview">
                    <div className="title">
                        <i className="uil uil-estate"></i>
                        <span className="text">Dashboard</span>
                    </div>

                    <div className="boxes">
                        <div className="box box-1">
                            <i className="uil uil-graduation-cap"></i>
                            <span className="text">Total Students</span>
                            <span className="number">400</span>
                        </div>

                        <div className="box box2">
                            <i className="uil uil-books"></i>
                            <span className="text">Total Courses</span>
                            <span className="number">23</span>
                        </div>

                        <div className="box box3">
                            <i className="uil uil-suitcase"></i>
                            <span className="text">Total Employees</span>
                            <span className="number">35</span>
                        </div>
                    </div>
                </div>


                <div className="activity">
                    <div className="title">
                        <span className="textActivities">Recent Activities</span>
                    </div>

                    <div className="activityData">
                        
                    </div>
                </div>
                </div>
  )
}

export default DashContent