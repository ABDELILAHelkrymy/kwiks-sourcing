import { Card } from "@mui/material";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const BlankCard = ({ children }: Props) => {
  return (
    <Card
      sx={{ p: 0, position: "relative" }}
      elevation={9}
      variant={undefined}
    >
      {children}
    </Card>
  );
};

export default BlankCard;
