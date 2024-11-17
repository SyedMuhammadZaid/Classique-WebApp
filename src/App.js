import { useEffect, useState } from 'react';
import './App.css';
import FullScreenLoader from './Components/loader';
import Toast from './Components/toast';
import AppRouting from './Routes';
import useGeneralStore from './Store/generalStore';
import useScrollToTop from './Config/hooks/useScrollToTop';

function App() {

  const { loading, setLoading } = useGeneralStore((state) => state)

  // on every path changes it will scroll to top.
  useScrollToTop();

  // setting initial loading to true and after 2 sec delay setting it to false.
  useEffect(() => {
    setLoading(true)
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {loading && <FullScreenLoader />}
      <Toast />
      <AppRouting />
    </div>
  );
}

export default App;
