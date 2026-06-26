interface Props {
  message: string;
}

export function StatusMessage({ message }: Props) {
  return (
    <p className="text-muted p-5">
      {message}
    </p>
  );
}