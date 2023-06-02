export const Details = ({ label, hook }) => {
  return (
    <details open>
      <summary>{label}</summary>
      <pre>{JSON.stringify(hook(), null, 2)}</pre>
    </details>
  );
};
