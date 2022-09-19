type ErrorMessageProps = {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => <p className="empty-notice">{ message }</p>;

export default ErrorMessage;
