import { useQuery } from "react-query";
import { Dashboard } from "types/dashboard";
import { useHttp } from "utils/http";

export const useKanbans = (params?: Partial<Dashboard>) => {
  const client = useHttp();
  return useQuery<Dashboard[]>(["kanbans", params], () =>
    client("kanbans", { data: params })
  );
};
