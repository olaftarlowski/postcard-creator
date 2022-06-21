import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import "./TextOptionForm.css";

const COLOR_PALLETTE = {
  red: "#ea4335",
  blue: "#4285f4",
  yellow: "#fbbc05",
  green: "#34a853",
};

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

      <div className="radio-color">
        <div className="radio-color__item">
          <input
            {...register("colors", { required: true })}
            type="radio"
            value={COLOR_PALLETTE.blue}
            id="radio-1"
            className="radio"
          />
          <label htmlFor="radio-1"></label>
        </div>
        <div className="radio-color__item">
          <input
            {...register("colors", { required: true })}
            type="radio"
            value={COLOR_PALLETTE.red}
            id="radio-2"
            className="radio"
          />
          <label htmlFor="radio-2"></label>
        </div>
        <div className="radio-color__item">
          <input
            {...register("colors", { required: true })}
            type="radio"
            value={COLOR_PALLETTE.yellow}
            id="radio-3"
            className="radio"
          />
          <label htmlFor="radio-3"></label>
        </div>
        <div className="radio-color__item">
          <input
            {...register("colors", { required: true })}
            type="radio"
            value={COLOR_PALLETTE.green}
            id="radio-4"
            className="radio"
          />
          <label htmlFor="radio-4"></label>
        </div>
      </div>

      <input type="submit" />
    </form>
  );
};

export default TextOptionForm;
