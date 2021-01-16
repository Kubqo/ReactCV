import React, { useEffect, useState } from 'react'
import { getRepos } from "./GitRepos";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActions, Grid, GridSpacing, makeStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Portfolio = () => {
  const classes = useStyles();
  // const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState<[]>([]);
  const [des, setDes] = useState<[]>([]);
  // const [isError, setIsError] = useState<boolean>(false);

  const Fetch = async (username: string) => {
    try {
      const repos = await getRepos(username);
      const Names = repos.map((element: { name: string }) => (element.name));
      const descrip = repos.map((element: { description: string }) => (element.description));
      
      setRepos(Names);
      setDes(descrip)
      // setIsLoading(false);
    } catch (err) {
      // setIsError(true);
    }
  };

  useEffect(() => {
    Fetch("Kubqo");
  }, []);

  return (
    <div style={{ fontFamily: 'Tahoma, sans-serif' }} className="pt-40 text-center  md:mx-0">
      <b className="text-5xl text-gray-800"> Portfolio </b>

      {/* <div style={{ marginLeft: "25%" }} className="flex justify-between items-center w-1/2 pt-16"></div> */}
      <div className="p-16 flex justify-between items-center ">
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {repos.map((name, index) => (
              <div key={name} style={{ textAlign: "center" }} >
                <Grid key={index} item>
                  {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                  <a key={name} href={`https://github.com/Kubqo/${name}`}>
                  <Card style={{ backgroundColor: "#1f2937" }} className="block w-72 m-5 ">
                    <CardActionArea>
                      <CardContent style={{ minHeight: "200px" }}>
                        <Typography gutterBottom variant="h5" component="h2" className="text-white">
                        <GitHubIcon className="mr-2 animate-pulse" /> <b>{name}</b>
                        </Typography>
                        <Typography variant="body2" component="p" className="text-white pt-8">
                          {des[index]}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                      <a key={name} href={`https://github.com/Kubqo/${name}`}>
                        <Button style={{ color: "white" }} size="small" className=" text-white pt-8 text-center ">
                          <GitHubIcon className="mr-2" />  Learn more on github
                   </Button> </a>
                    </CardActions> */}
                  </Card>
                  </a>
                  {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                </Grid>
              </div>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Portfolio