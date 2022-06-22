import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { RadioInput } from "../components";

const COLOR_INPUTS = [
  { id: "radio-1", color: "#4285f4" },
  { id: "radio-2", color: "#ea4335" },
  { id: "radio-3", color: "#fbbc05" },
  { id: "radio-4", color: "#34a853" },
];

const FONTS = ["monospace", "fantasy", "sans-serif"];

const TextOptionForm = ({ addNewText }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newID = uuidv4();
    data.id = newID;
    addNewText((prevState) => [...prevState, data]);
    reset({ insertedText: "", colors: data.colors });
  };
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <select {...register("font")}>
        {FONTS.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="insertedText"
        placeholder="enter some text"
        {...register("insertedText", {
          required: true,
          minLength: 1,
          maxLength: 50,
        })}
      />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {COLOR_INPUTS.map((radio) => {
          return (
            <RadioInput
              {...register("colors", { required: true })}
              key={radio.id}
              value={radio.color}
              label={radio.id}
            />
          );
        })}
      </div>

      <input type="submit" />
    </form>
  );
};

export default TextOptionForm;
