import React, { useEffect } from 'react';
import { useAppStore } from '../../../store/appStore';

type typePageContainer = {
  title: string;
  children: React.ReactNode;
};

const InternPageContainer = ({ title, children }: typePageContainer) => {
  const [, updateAppStore] = useAppStore();

  useEffect(() => {
    updateAppStore({ type: 'SET_CURRENT_USER', data: title });
  }, [title, updateAppStore]);

  return <>{children}</>;
};

export default InternPageContainer;
