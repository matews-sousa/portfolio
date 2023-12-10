import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    Name: {name} <br />
    Email: {email} <br />
    <br />
    Message: <br />
    {message}
  </div>
);
