import { Typography, CardContent, Card } from "@material-ui/core";

const Message = ({ bgColor }: { bgColor: string }) => {
  return (
    <div>
      <Card style={{ backgroundColor: `${bgColor}` }}>
        <CardContent>
          <Typography color="primary" variant="h6" component="h2">
            Hey!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
