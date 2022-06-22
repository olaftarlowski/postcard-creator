import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { RadioInput } from "../components";
import { COLOR_INPUTS, FONTS } from "./stickers.data";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 280px;

  .form-radio {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .form-radio-wrapper {
    display: flex;
    flex-direction: row-reverse;
  }

  input[type="text"],
  select {
    width: 100%;
    height: 40px;
    padding: 6px 20px;
    font-size: 22px;
  }
  input[type="text"] {
    height: 90px;

    &:focus {
      outline: 0px;
      border: 2px solid #232323;
    }
  }
  select {
    text-transform: capitalize;
    &:focus {
      outline: 0px;
      border: 2px solid #232323;
    }
  }

  button {
    width: 130px;
    height: 45px;
    padding: 6px 20px;
    font-size: 20px;
    color: white;
    background-color: #000;
    cursor: pointer;
  }
`;

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
        <button type="submit">Add</button>
      </div>
    </FormWrapper>
  );
};

export default TextOptionForm;
