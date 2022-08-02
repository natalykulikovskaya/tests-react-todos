import cn from 'classnames'
import { useDispatch, useSelector } from "react-redux";

import { TabsEnum } from "../../type/enum";

import className from './Tabs.module.scss';
import { setCurrentTab } from "../../redux/todoSlice";
import { currentTabSelector } from "../../redux/todosSelector";

export const Tabs = () => {
    const dispatch = useDispatch();
    const activeTab = useSelector(currentTabSelector);

    const handleTabClick = (currentTab: string) => {
       dispatch(setCurrentTab(currentTab));
    }

  return (
    <div className={className.container}>
      <button
          type="button"
          className={cn(className.tab, activeTab === TabsEnum.all && className.active)}
          onClick={() => handleTabClick(TabsEnum.all)}
      >
          Все
      </button>
      <button
          type="button"
          className={cn(className.tab, activeTab === TabsEnum.complete && className.active)}
          onClick={() => handleTabClick(TabsEnum.complete)}
      >
          Завершенные
      </button>
      <button
          type="button"
          className={cn(className.tab, activeTab === TabsEnum.unComplete && className.active)}
          onClick={() => handleTabClick(TabsEnum.unComplete)}
      >
          Незавершенные
      </button>
      <button
          className={className.delete}
          type="button"
          onClick={() => {}}
      >
          Удалить все
      </button>
    </div>
  );
};
