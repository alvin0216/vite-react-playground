import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

// pc 100
// user 60
// radar 5

// pc 100
// user 60
// radar 5
const data = [
  {
    subject: 'PC Performance',
    averageScore: 30,
    yourScore: 20,
    fullMark: 150,
  },
  {
    subject: 'Warranty',
    averageScore: 80,
    yourScore: 1400,
    fullMark: 1500,
  },
  {
    subject: 'Security',
    averageScore: 80,
    yourScore: 50,
    fullMark: 1250,
  },
  {
    subject: 'Software status',
    averageScore: 80,
    yourScore: 50,
    fullMark: 1250,
  },
  {
    subject: 'Hardware status',
    averageScore: 80,
    yourScore: 50,
    fullMark: 254,
  },
];

const Demo1: React.FC = () => {
  return (
    <RadarChart outerRadius={90} width={730} height={250} data={data}>
      <PolarGrid stroke='#8884d8' />
      {/* <PolarRadiusAxis domain={[0, 100]} orientation='middle' axisLine={{ strokeDasharray: '2 2' }} /> */}
      <PolarAngleAxis dataKey='subject' tick={{ fill: 'red' }} />
      <Radar name='Average score' dataKey='averageScore' stroke='#6366F1' fill='#6366F1' fillOpacity={0.5} />
      <Radar name='Your device' dataKey='yourScore' stroke='#87DBBF' fill='#87DBBF' fillOpacity={1} />
      <Legend
        layout='vertical'
        align='right'
        verticalAlign='middle'
        content={({ payload }) => {
          return (
            <ul>
              {payload?.reverse()?.map((p) => (
                <li key={`item-${p.dataKey}`} className='flex items-center'>
                  <div style={{ backgroundColor: p.color }} className='w-4 h-4 mr-4'></div>
                  {p.value}
                </li>
              ))}
            </ul>
          );
        }}
      />
    </RadarChart>
  );
};

export default Demo1;
