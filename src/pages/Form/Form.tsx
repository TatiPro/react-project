import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./Form.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./PdfDocument";

export interface IMyForm {
  title: string;
  text: number;
  email: string;
  image: FileList;
}
const Form = () => {
  const [data, setData] = useState<IMyForm>();
  const [tasks, setTasks] = useState<IMyForm[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMyForm>({
    mode: "onBlur",
  });

  const saveElement: SubmitHandler<IMyForm> = (data) => {
    // setTasks((prev) => [...prev, data]);
    // reset();
    setData(data);
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
        <div className={errors.title ? "show" : "hide"}>
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
        <div className={errors.text ? "show" : "hide"}>
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
        <div className={errors.email ? "show" : "hide"}>
          <p>{errors.email?.message}</p>
        </div>
        <input
          style={{ border: "none" }}
          type="file"
          accept="image/*"
          {...register("image", {
            required: "Обязательно для заполнения",
          })}
        />
        <div className={errors.image ? "show" : "hide"}>
          <p>{errors.image?.message}</p>
        </div>

        <div className="buttons-wrapper">
          <button type="submit">Сохранить</button>
          {!!data?.email && !!data.text && !!data.title && (
            <PDFDownloadLink
              className="download-button"
              document={<PdfDocument email={data?.email} text={data?.text} title={data?.title} image={data?.image} />}
              fileName="file.pdf"
            >
              {({ blob, url, loading, error }) => (loading ? "Загрузка..." : "Скачать")}
            </PDFDownloadLink>
          )}
        </div>
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
