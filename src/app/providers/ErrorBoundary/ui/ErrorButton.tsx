import { useState, type FC, useEffect } from "react";
import Button from "shared/ui/Button/Button";


  const ErrorButton: FC = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if(error) throw new Error();
  }, [error])

  const handleThrow = () => setError(true);

    return (
      <Button onClick={handleThrow}>
        Throw err
      </Button>
    );
  };

export default ErrorButton;