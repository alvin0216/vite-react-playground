import './styles.css';
interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      App
      <div className='loader'></div>
      <div className='dots flex space-x-2'>
        <div className='dot1 w-10 h-10 bg-red rounded-full'></div>
        <div className='dot2 w-10 h-10 bg-red rounded-full'></div>
        <div className='dot3 w-10 h-10 bg-red rounded-full'></div>
      </div>
    </>
  );
};
export default App;
