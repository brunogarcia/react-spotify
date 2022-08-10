type ErrorMessageProps = {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <p className="empty-notice">{ message }</p>;
}

export default ErrorMessage;
