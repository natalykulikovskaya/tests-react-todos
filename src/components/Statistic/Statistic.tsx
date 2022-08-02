import { useSelector } from "react-redux";

import {
  completeCountSelector,
  todosCountSelector,
  unCompleteCountSelector,
} from "../../redux/todosSelector";

import classNames from "./Statistic.module.scss";

export const Statistic = () => {
  const allTodosCount = useSelector(todosCountSelector);
  const completeTodosCount = useSelector(completeCountSelector);
  const unCompleteTodosCount = useSelector(unCompleteCountSelector);

  return (
    <div className={classNames.container}>
      <div className={classNames.block}>
        <span>Всего</span>
        <span className={classNames.tag}>{allTodosCount}</span>
      </div>
      <div className={classNames.block}>
        <span>Завершено</span>
        <span className={classNames.tag}>{completeTodosCount}</span>
      </div>
      <div className={classNames.block}>
        <span>Выполни</span>
        <span className={classNames.tag}>{unCompleteTodosCount}</span>
      </div>
    </div>
  );
};
