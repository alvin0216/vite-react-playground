import { Card, Container, Grid } from '@mui/material';
import Demo1 from './demos/Demo1';

const App: React.FC = () => {
  return (
    <Container maxWidth='lg'>
      <div className='min-h-[100vh] pt-12'>
        <Grid container spacing='16'>
          <Wrapper title='Demo1' xs={12} content={<Demo1 />} />
        </Grid>
      </div>
    </Container>
  );
};

interface WrapperProps {
  content: React.ReactNode;
  title?: string;
  xs?: number;
}
const Wrapper: React.FC<WrapperProps> = ({ content, title = 'Demo', xs = 6 }) => {
  return (
    <Grid item xs={xs}>
      <Card className='min-h-12 p-6'>
        <h6 className='font-semibold pb-2'>{title}</h6>
        {content}
      </Card>
    </Grid>
  );
};

export default App;
