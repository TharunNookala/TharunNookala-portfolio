import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({
  name,
  image,
  techstack,
  description,
  github,
  live,
}) {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const handleLiked = () => {
    setLiked(!liked);
    notify();
  };
  const notify = () => toast("!😊 Thanks for the like ");
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex">
      {liked && (
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
        />
      )}
      <Card
        sx={{ width: "100%", minHeight: 400, maxHeight: 440 }}
        className="border text-white p-1"
      >
        <CardHeader
          className="font-normal font-anto text-center text-base rounded-md"
          action={
            <IconButton aria-label="add to favorites" onClick={handleLiked}>
              {liked ? (
                <FavoriteIcon className="text-red-600" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
          }
          title={name}
        />
        <CardMedia component="img" height="200" image={image} alt={name} />
        <CardContent>
          <Typography variant="h6" className="text-base font-medium">
            Tech stack used :
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {techstack}
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          className="flex gap-2 items-center justify-between"
        >
          <Button target="_blank" href={github}>
            View Code
          </Button>
          <Button target="_blank" href={live}>
            Live
          </Button>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className="bg-yellow-50">
            <Typography variant="subtitle1" className="font-semibold italic">
              Description:
            </Typography>
            <Typography paragraph>{description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
