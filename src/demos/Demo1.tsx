import { Button } from "@mui/material";
import Mock from "mockjs";

const data = Mock.mock("@paragraph");

const Demo1: React.FC = () => {
  return (
    <>
      <Button variant="contained">Click</Button>
      <div className="text-cyan-500">{data}</div>

      <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        ...
      </button>
    </>
  );
};

export default Demo1;
