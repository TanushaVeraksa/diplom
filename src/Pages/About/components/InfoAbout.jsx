import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  image: {
    width: 350,
    height: 278,
  },
  container: {
    padding: 30,
  },
  flexStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textStyle: {
      marginLeft: 20,
  },
  titleStyle: {
      marginTop: 20,
      marginBottom: 20,
  }
});

function InfoAbout() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.flexStyle}>
        <img
          className={classes.image}
          src="https://demo.themezy.com/system/resources/demo_themes/000/000/010//dummy/figure@2x.jpg"
          alt=""
        />
        <div className={classes.textStyle}>
        <Typography className={classes.titleStyle} color="textSecondary" variant="h5" >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam.
        </Typography>
        <Typography color="textSecondary" variant="subtitle2" component="p" align="left">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit consectetur adipisci velit, sed quia non
          numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
          quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam.
        </Typography>
        </div>
      </div>
      <div>
        <Typography className={classes.titleStyle} color="textSecondary" variant="h5" >
          Vision and Misssion
        </Typography>
        <Typography color="textSecondary" variant="subtitle2" component="p" align="left">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit consectetur adipisci velit, sed quia non
          numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
          quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam dignissimos ducimus qui blanditiis
          praesentium voluptatum atque.
        </Typography>
        <Typography className={classes.titleStyle} color="textSecondary" variant="h5" >
        Our Team
        </Typography>
      </div>
    </div>
  );
}

export default InfoAbout;
