import { useEffect } from 'react';

export function useSetPageTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
