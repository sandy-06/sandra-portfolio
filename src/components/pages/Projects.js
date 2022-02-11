import babyAid from "../../assets/baby-aid.png"
import showFinder from "../../assets/show-finder.png"
import employeeTracker from "../../assets/employee-tracker.png"
import workDayScheduler from "../../assets/workdayscheduler.png"
import notetaker from "../../assets/notetaker.png"
import socialnetwork from "../../assets/socialnetwork.png"
import { Card, CardHeader, Container } from "@mui/material"



export default function Projects() {
  return (

    <div class="body">
      <h1>Projects</h1>

      <div >

        <div class="container-fluid">
          <div class="row justify-content-center">
            <h3>Interactive Full-Stack Project</h3>
            <h5>Made with JavaScript, Mysql, and Handlebars</h5>
            <h5>Deployed at https://calm-fortress-46248.herokuapp.com/, repo at https://github.com/sandy-06/Baby-Aid</h5>
            <img src={babyAid} width="80%" ></img>
          </div>
        </div>
        <div class="container overflow-hidden px-4">
          <div class="row inline-flex">
            <div class="col-lg-6" >


              <h3>Interactive Front End Group Project</h3>
              <h6>Made with JavaScript, HTML, CSS and Foundation</h6>
              <h6>Deployed at https://sandy-06.github.io/show-finder/ repo https://github.com/sandy-06/show-finder </h6>

              <img src={showFinder} />
            </div>

            <div class='col-lg-6'>
              <h3>employee-tracker</h3>
              <h6>Made with Mysql2, inquirer, console.table and Javascript</h6>
              <h6>Repo https://github.com/sandy-06/employee-tracker</h6>
              <break></break>
              <img class="image" src={employeeTracker} />

            </div>
            <div class='col-lg-6' id>
              <h3>Work Day Scheduler</h3>
              <h6>Made with HTML, CSS, and Javascript </h6>
              <h6>Deployed at https://sandy-06.github.io/Work-Day-Scheduler/</h6>
              <h6>Repo at https://github.com/sandy-06/Work-Day-Scheduler </h6>
              <break></break>
              <img class="image" src={workDayScheduler} />
            </div>
            <div class='col-lg-6'>
              <h3>Notetaker</h3>
              <h6>Made with Express.js and Javascript </h6>
              <h6>Deployed https://ssnote-taker.herokkuapp.com//</h6>
              <h6>Repo at https://github.com/sandy-06/Note-taker </h6>
              <break></break>
              <img class="image" src={notetaker} />
            </div>
            <div class='col-lg-6'>
              <h3>Social Network</h3>Exp
              <h6>Made with express, mongoose, Nosql and Javascript </h6>
              <h6>Video  https://watch.screencastify.com/v/OvtR1k86tijvrvoDMu6e.//</h6>
              <h6>Repo at https://github.com/sandy-06/social-network </h6>
              <break></break>
              <div class='image'>
                <img src={socialnetwork} />
              </div>
            </div>
          </div>

        </div>



      </div >
    </div>
  )
}


