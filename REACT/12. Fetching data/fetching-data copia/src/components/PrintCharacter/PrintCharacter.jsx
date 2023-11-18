import "./PrintCharacter.css";
import { useCounter, useFetch } from "../../hooks";
import { Loading, Character } from "../index";

export const PrintCharacter = () => {
  const { counter, next, previous, reset } = useCounter();
  const { data, isLoading, hasError } = useFetch(
    `https://ghibliapi.vercel.app/films`
  );

  const {
    title,
    original_title,
    image,
    director,
    release_date,
    rt_score,
    running_time,
  } = !!data && data[counter];
  console.log(data);

  if (hasError) {
    return <div className="alert error-alert">{hasError.toString()}</div>;
  } else {
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <>
          <Character
            title={title}
            original_title={original_title}
            image={image}
            director={director}
            release_date={release_date}
            rt_score={rt_score}
            running_time={running_time}
          />
          <div className='btn-div'>
          {counter > 0 && (
            <button className="previous-btn btn" onClick={() => previous()}>
              PREVIOUS
            </button>
          )}
          {counter != 0 && (
            <button className="reset-btn btn" onClick={() => reset()}>
              RESET
            </button>
          )}
          {counter < 21 && (
            <button className="next-btn btn" onClick={() => next()}>
              NEXT
            </button>
          )}
          </div>
        </>
      );
    }
  }
};
