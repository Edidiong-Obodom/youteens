import React from "react";

const Card = ({
  visual,
  header,
  body,
  style,
}: {
  visual?: React.ReactNode;
  header?: React.ReactNode;
  body?: React.ReactNode;
  style?: string;
}) => {
  return (
    <div className={`${style}`}>
      {visual}
      {header}
      {body}
    </div>
  );
};

export default Card;
