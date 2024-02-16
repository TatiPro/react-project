import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./Form.css";

//модуль 5 - форма

const Form = () => {
  interface IMyForm {
    title: string;
    text: number;
    email: string;
  }

  const [tasks, setTasks] = useState<IMyForm[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IMyForm>({
    mode: "onBlur",
  });

  const saveElement: SubmitHandler<IMyForm> = (data) => {
    setTasks((prev) => [...prev, data]);
    reset();
  };

  return (
    <>
      <h1>Это форма</h1>
      <p>Заполните форму</p>
      <form onSubmit={handleSubmit(saveElement)}>
        <input
          {...register("title", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 5,
              message: "Нужно больше символов",
            },
            maxLength: {
              value: 15,
              message: "Максимум 15 символов",
            },
          })}
          placeholder="название"
        />
        <div>
          <p>{errors.title?.message}</p>
        </div>
        <input
          {...register("text", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 1,
              message: "Нужно больше символов",
            },
          })}
          placeholder="текст"
        />
        <div>
          <p>{errors.text?.message}</p>
        </div>

        <input
          {...register("email", {
            required: "Поле обязательно для заполнения",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Введите валидный email",
            },
            minLength: {
              value: 1,
              message: "Нужно больше символов",
            },
          })}
          placeholder="email"
        />
        <div>
          <p>{errors.email?.message}</p>
        </div>

        <button type="submit">Сохранить</button>
      </form>
      {tasks.map((task, i) => (
        <p className="comment">
          <h2>Пост {i + 1}</h2>
          Название - {task.title}
          <br />
          Текст - {task.text}
          <br />
          Email - {task.email}
        </p>
      ))}
    </>
  );
};

export default Form;
