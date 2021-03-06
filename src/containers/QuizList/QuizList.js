import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import classes from "./QuizList.module.css";
import Loader from "../../components/UI/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizes } from "../../store/actions/quiz";

const QuizList = props => {
  const renderQuizes = () => {
    return quizes.map(quiz => {
      return (
        <li key={quiz.id}>
          <NavLink to={"/quiz/" + quiz.id}>
            <p>{quiz.name}</p>
            <p>{quiz.quizTitle}</p>
          </NavLink>
        </li>
      );
    });
  };
  const dispatch = useDispatch();
  const { quizes, loading } = useSelector(state => state.quiz);

  useEffect(() => {
    const func = async () => dispatch(fetchQuizes());
    func();
  }, [dispatch]);

  return (
    <div className={classes.QuizList}>
      <div>
        <h1>Список тестов</h1>
        {loading ? (
          <Loader />
        ) : quizes.length !== 0 ? (
          <ul>{renderQuizes()}</ul>
        ) : (
          <h2>Тестов пока нет</h2>
        )}
      </div>
    </div>
  );
};

export default QuizList;
