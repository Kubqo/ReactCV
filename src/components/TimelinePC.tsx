import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import GamcaLogo from '../images/Gamca_logo_public-1-3.png'
import FiLogo from '../images/muni-fullname.jpg'
import SGDLogo from "../images/sgd-facebook-preview.png"
import LupLogo from"../images/levelup.jpg"

export default function CustomizedTimeline() {
  return (
    <div>
      <h1 className="text-4xl text-gray-800 text-center mt-28 mb-12 "> <b>Education</b></h1>
      <Timeline align="alternate">

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textPrimary" className="pt-2">
              2020 - X
            </Typography>
            <Typography>
              <b>Brno, Czech republic</b>
            </Typography>
            <Typography variant="h5" component="h1" className="float-right">
              <img style={{ width: "180px" }} src={FiLogo} alt="FI LOGO" />
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper style={{ backgroundColor: "#1f2937" }} elevation={3} className="p-6 ">
              <Typography className=" text-white pb-8">
                <b className="text-2xl">Faculty of informatics</b>
              </Typography>
              <Typography className="text-white">Currently studying at faculty of informatics for bachelor's Degree in Programming and Development</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textPrimary" className="pt-2">
              2016 - 2020
            </Typography>
            <Typography>
              <b>Bratislava</b>
            </Typography>
            <Typography variant="h5" component="h1">
              <img style={{ width: "300px" }} src={GamcaLogo} alt="Gamča" />
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper style={{ backgroundColor: "#1f2937" }} elevation={3} className="p-6 w-full float-right ">
              <Typography className=" text-white pb-8">
                <b className="text-2xl">Gamča</b>
              </Typography>
              <Typography className="text-white">Currently best mathematical high school in our country, focused on math. Lots of voluntary subjects in areas where you want to learn more.</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textPrimary" className="pt-2">
              Summer 2019
            </Typography>
            <Typography>
              <b>Bratislava</b>
            </Typography>
            <Typography variant="h5" component="h1">
              <img style={{ width: "240px" }} src={SGDLogo} alt="Gamča" className = "float-right"/>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper style={{ backgroundColor: "#1f2937" }} elevation={3} className="p-6 ">
              <Typography className=" text-white pb-8">
                <b className="text-2xl">Summer game dev</b>
              </Typography>
              <Typography className="text-white">This was competetion held in Bratislava, Slovakia.
            I have collaborated with other team members for one month to make a mobile game in Unity</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <TimelineItem className="pb-20">
          <TimelineOppositeContent>
            <Typography variant="body2" color="textPrimary" className="pt-2">
              2018 - 2019
            </Typography>
            <Typography>
              <b>Bratislava</b>
            </Typography>
            <Typography variant="h5" component="h1">
              <img style={{ width: "300px" }} src={LupLogo} alt="Gamča" />
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper style={{ backgroundColor: "#1f2937" }} elevation={3} className="p-6 w-full float-right">
            <Typography className=" text-white pb-8">
                <b className="text-2xl">Unity + C# Course</b>
              </Typography>
              <Typography className="text-white">Year of making games in Unity using C#, i have met new people, learned how to work in team, and many new things</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}