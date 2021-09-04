import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";

const Cards = () => {
  return (
    <Grid container justify="center" spacing={2}>
      {[0, 1, 2].map((value) => (
        <Grid key={value} item xs={6} sm={6}>
          <Paper style={{ height: 90}} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
