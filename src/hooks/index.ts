import { useEffect, useState, useRef } from "react";

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};

export const useArray = <T>(arr: T[]) => {
  const [arrTemp, setArrTemp] = useState(arr);

  const clear = () => {
    setArrTemp([]);
  };

  const removeIndex = (idx: number) => {
    const temp = [...arrTemp];
    const newArr = temp.splice(idx, 1);
    setArrTemp(newArr);
  };

  const add = (value: T) => {
    setArrTemp([...arrTemp, value]);
  };

  return {
    arrTemp,
    clear,
    removeIndex,
    add,
  };
};

export const useDocumentTitle = (
  title: string,
  keepOnUmount: boolean = true
) => {
  const oldTitle = useRef(document.title).current;
  useEffect(() => {
    document.title = title;
  }, [title]);
  useEffect(() => {
    return () => {
      if (!keepOnUmount) {
    
        document.title = oldTitle;
      }
    };
  }, [keepOnUmount, oldTitle]);
};


export const useMountedRef = () => {
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  });
  return mountedRef;
};
