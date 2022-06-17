import { useForm } from "react-hook-form";

const TextOptionForm = ({ addNewText }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    addNewText(prevState => [...prevState, data]);
    console.log(data);
  };
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <select {...register("font")}>
        <option value="font1">font1</option>
        <option value="font2">font2</option>
        <option value="font3">font3</option>
      </select>
      <input
        type="text"
        placeholder="inserted-text"
        {...register("inserted-text", {
          required: true,
          minLength: 1,
          maxLength: 50,
        })}
      />

      <input
        {...register("colors", { required: true })}
        type="radio"
        value="red"
      />
      <input
        {...register("colors", { required: true })}
        type="radio"
        value="blue"
      />
      <input
        {...register("colors", { required: true })}
        type="radio"
        value="yellow"
      />
      <input
        {...register("colors", { required: true })}
        type="radio"
        value="green"
      />

      <input type="submit" />
    </form>
  );
};

export default TextOptionForm;
