import { Flex } from "antd";
import "./index.css";
import Index from "./Layout/Index";

function App() {
  return (
    <Flex vertical className="w-full overflow-scroll">
      <Index />
    </Flex>
  );
}
export default App;
