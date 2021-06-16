import { Typography, CardContent, Card } from "@material-ui/core";

const Message = ({
  bgColor,
  message,
}: {
  bgColor: string;
  message: string;
}) => {
  return (
    <Card style={{ backgroundColor: `${bgColor}`, margin: ".5em" }}>
      <CardContent>
        <Typography color="primary" variant="h6" component="h2">
          {message || ""}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Message;
