import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
//@ts-ignore
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import { ChoicesList } from "./ChoicesList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
);

interface IPollProp {
  element: {
    published_at: string; //cambiar a Date
    url: string;
    question: string;
    choices: {
      url: string;
      votes: number;
      choice: string;
    }[];
  };
}

const AcordionElement = (element: IPollProp) => {
  const classes = useStyles();
  const { question, choices } = element.element;
  console.log("ELEMENT", choices);
  const uid = uuidv4();
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${uid}-content`}
        id={`${uid}-header`}
      >
        <Typography className={classes.heading}>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <ChoicesList choices={choices} />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AcordionElement;
