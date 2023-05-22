import LeftBlob from "./components/leftBlob";

function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto h-screen bg-white">
        <h1 className="flex justify-center mt-40 mb-20">What kind of coach are you?</h1>
        <div className="flex justify-between max-w-4xl mx-auto">
          <img
            className=" max-h-fit rounded-2xl"
            src="../images/business_coach_croped.png"
            alt="business_coach"
          />
          <img
            className=" max-h-fit rounded-2xl"
            src="../images/life_coach_croped.png"
            alt="life_coach"
          />
        </div>
        <img src="../images/vector_left.svg" alt="vector_left.svg" />
      </div>
      <LeftBlob />
    </>
  );
}

export default App;
