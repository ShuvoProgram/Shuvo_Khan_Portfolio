import { useEffect, useState } from "react";
import {
  RouterProvider,
} from "react-router-dom";
import Loading from "./Component/Loading/Loading";
import { router } from './routes/routes/routes';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])
  return (
    <>
    {
        isLoading ? <Loading /> : <div>
          <RouterProvider router={router} />
        </div>
    }
    </>
  );
}

export default App;
