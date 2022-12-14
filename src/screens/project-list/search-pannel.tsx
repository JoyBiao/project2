import { Input, Form } from "antd";
import { UserSelect } from "components/user-select";
import { Project } from "./list";

export interface User {
  id: number;
  name: string;
  personId: number;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPannelProps {
  users: User[];
  param: Partial<Pick<Project, "name" | "personId">>;
  setParam: (param: SearchPannelProps["param"]) => void;
}
export const SearchPannel = ({ param, setParam }: SearchPannelProps) => {
  return (
    <Form style={{ marginBottom: "2rem" }} layout={"inline"}>
      <Form.Item>
        <Input
          type="text"
          value={param.name}
          placeholder={"Project name"}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        ></Input>
      </Form.Item>
      <Form.Item>
        <UserSelect
          defaultOptionName={"Manager"}
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        />
      </Form.Item>
    </Form>
  );
};
