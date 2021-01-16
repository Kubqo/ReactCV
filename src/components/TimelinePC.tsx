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

import GamcaLogo from '../images/logo.svg'
import FiLogo from '../images/muni-fullname.jpg'

export default function CustomizedTimeline() {
  return (
    <Timeline align="alternate">
      
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textPrimary" className="pt-2">
            2020 - X
            </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper style={{ backgroundColor: "#1f2937" }} elevation={3} className="p-6 md:w-1/2">
            <Typography variant="h5" component="h1" className="item-centre">
              <img src={FiLogo} alt="React Logo" />
            </Typography>
            <Typography className="text-white">
              <b>Brno</b>
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
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper style={{ backgroundColor: "#1f2937" }} elevation={3} className="p-6 w-full float-right md:w-1/2">
            <Typography variant="h5" component="h1">
              <img src={GamcaLogo} alt="Gamča" />
            </Typography>
            <Typography className="text-white">
              <b>Bratislava</b>
            </Typography>
            <Typography className="text-white">One of the best mathematic grammar schools in Slovakia</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textPrimary" className="pt-2">
            Summer 2019
            </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper style={{ backgroundColor: "#1f2937" }} elevation={3} className="p-6 w-full md:w-1/2">
            <Typography variant="h5" component="h1" className="item-centre text-white">
              Summer game dev
            </Typography>
            <Typography className="text-white">
              <b>Bratislava</b>
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
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper style={{ backgroundColor: "#1f2937" }} elevation={3} className="p-6 w-full float-right md:w-1/2">
            <Typography variant="h5" component="h1" className="text-white">
              Unity + C# Course
            </Typography>
            <Typography className="text-white">
              <b>Bratislava</b>
            </Typography>
            <Typography className="text-white">Making games in Unity using C#</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}