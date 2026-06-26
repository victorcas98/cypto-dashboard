interface Props {
  message: string;
}

export function ErrorMessage({ message }: Props) {
  return (
    <div className="text-danger p-5">
      {message}
    </div>
  );
}