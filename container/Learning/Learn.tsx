import "./Learning.scss";
import Learning from "./Learning";
import { getLearning } from "@/sanity/sanity.utils";

const Learn = async () => {
  const learning = await getLearning();
  return (
    <div>
      <Learning learning={learning} />
    </div>
  );
};

export default Learn;
