import React, { useEffect, useState } from 'react'
import { getRepos } from "./GitRepos";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActions, Grid, GridSpacing } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const Contact = () => {


  return (
    <div style={{ fontFamily: 'Tahoma, sans-serif' }} className="pt-10 text-center ">
      {/* <div style={{ marginLeft: "25%" }} className="flex justify-between items-center w-1/2 pt-16"></div> */}
      <div className="p-16 items-center ">
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
                  <Card style={{ backgroundColor: "#1f2937" }} className="pt-5 w-full m-5 md:w-1/2 md:pt-20" >
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className="text-white">
                        <b className=" animate-pulse" >Contact Me:</b>
                        </Typography>
                        <Typography variant="body2" component="p" className="text-white pt-8 ">
                        <b>Brno, Czech Republic</b>

                        </Typography>
                        <Typography variant="body2" component="p" className="text-white pt-8 ">

                        <b>jakubduris1@gmail.com</b>
                        
                        <Typography variant="body2" component="p" className="text-white pt-8 "></Typography>
                        <a href = "https://github.com/Kubqo"><GitHubIcon className=" mx-3 "/></a>
                        <a href = "https://www.facebook.com/Kubqo1337/"><FacebookIcon className=" mx-3 "/></a>
                        <a href = "https://www.linkedin.com/in/jakub-%C4%8Furi%C5%A1-786ba21a9/"><LinkedInIcon className=" mx-3 "/></a>
                         </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      {/* <a key={name} href={`https://github.com/Kubqo/${name}`}>
                        <Button style={{ color: "white" }} size="small" className=" text-white pt-8 text-center ">
                          <GitHubIcon className="mr-2" />  Learn more on github
                   </Button> </a> */}
                    </CardActions>
                  </Card>
                  {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                </Grid>
          </Grid>
      </div>
    </div>
  )
}

export default Contact