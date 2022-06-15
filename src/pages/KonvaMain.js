import { Layer, Stage, Rect } from "react-konva";

const KonvaMain = () => {
  return (
    <div>
      <h5>Canvas</h5>
      <Stage width={600} height={400}>
        <Layer>
          <Rect height={30} width={30} fill={"red"} x={20} y={60} />
        </Layer>
      </Stage>
    </div>
  );
};

export default KonvaMain;
