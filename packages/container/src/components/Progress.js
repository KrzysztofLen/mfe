import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => {
	return createStyles({
		bar: {
			width: "100%",
			"& > * + *": {
				marginTop: theme.spacing(2),
			},
		},
	});
});

export default () => {
	const classes = useStyles();

	return (
		<div className={classes.bar}>
			<LinearProgress />
		</div>
	);
};
