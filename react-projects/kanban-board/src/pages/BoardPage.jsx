import { useParams } from "react-router-dom";

function BoardPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Board Page - Board ID: {id}</h1>
    </div>
  );
}

export default BoardPage;
