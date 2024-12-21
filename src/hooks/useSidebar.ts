import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
import { toggleSidebar, setActiveItem } from '../features/sidebar/sidebarSlice';

const useSidebar = () => {
  const dispatch = useDispatch();
  const { isOpen, activeItem } = useSelector<RootState>((state) => state.sidebar);

  return {
    isOpen,
    activeItem,
    handleToggleSidebar: () => dispatch(toggleSidebar()),
    handleSetActiveItem: (id: string) => dispatch(setActiveItem(id)),
  };
};

export default useSidebar;
