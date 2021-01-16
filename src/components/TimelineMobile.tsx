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
    <Timeline align="left" className="items-center">

      <TimelineItem>
        <TimelineOppositeContent className="hidden">
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="body2" color="textPrimary" className="pt-2">
            <b>2016 - X</b>
            </Typography>
          <Paper style={{ backgroundColor: "#1f2937" }} elevation={3} className="p-6 w-full">
              <img src={FiLogo} alt="React Logo" className = ""/>
            <Typography className="text-white">
              <b>Brno</b>
            </Typography>
            <Typography className="text-white">Currently studying at faculty of informatics for bachelor's Degree in Programming and Development</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <TimelineItem>
        <TimelineOppositeContent className="hidden">
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body2" color="textPrimary" className="pt-2">
            <b>2016 - 2020</b>
            </Typography>
          <Paper style={{ backgroundColor: "#1f2937" }} elevation={3} className="p-6 w-full ">
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
        <TimelineOppositeContent className="hidden">
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="body2" color="textPrimary" className="pt-2">
            <b>Summer 2019</b>
            </Typography>
          <Paper style={{ backgroundColor: "#1f2937" }} elevation={3} className="p-6 w-full">
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

      <TimelineItem className = "mb-12">
        <TimelineOppositeContent className="hidden">
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="body2" color="textPrimary" className="pt-2">
            <b>2018 - 2019</b>
            </Typography>
          <Paper style={{ backgroundColor: "#1f2937" }} elevation={3} className="p-6 w-full">
            <Typography variant="h5" component="h1" className="item-centre text-white">
            Unity + C# Course
            </Typography>
            <Typography className="text-white">
              <b>Bratislava</b>
            </Typography>
            <Typography className="text-white">On this course i have learned basics of making games using unity and C#</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}