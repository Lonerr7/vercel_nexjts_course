import { FC } from 'react';

interface Props {
  stateErrorField: string[];
  idPrefix: string;

}

const ErrorMessage: FC<Props> = ({ stateErrorField, idPrefix }) => {
  return (
    <div
      className="mt-2 text-sm text-red-500"
      id={`${idPrefix}-error`}
      aria-live="polite"
    >
      {stateErrorField.map((err) => (
        <p key={err}>{err}</p>
      ))}
      
    </div>
  );
};

export default ErrorMessage;
