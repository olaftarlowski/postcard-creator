import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { Button, RadioInput } from "../";
import { COLOR_INPUTS, FONTS } from "../stickers.data";
import { FormWrapper } from "../styled-components";

const TextOptionForm = ({ addNewText }) => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newID = uuidv4();
    data.id = newID;
    addNewText((prevState) => [...prevState, data]);
    reset({ insertedText: "", colors: data.colors });
  };
  // console.log(errors);

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
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
        placeholder="Enter some text"
        {...register("insertedText", {
          required: true,
          minLength: 1,
          maxLength: 50,
        })}
      />

      <div className="form-radio-wrapper">
        <div className="form-radio">
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
        <Button type="submit">Add</Button>
      </div>
    </FormWrapper>
  );
};

export default TextOptionForm;
