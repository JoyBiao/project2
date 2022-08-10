import { useSetUrlSearchParam } from "utils/url";
import { Row } from "components/lib";
import { Button, Input } from "antd";
import { UserSelect } from "components/user-select";
import { useTasksSearchParams } from "./utils";
import { TaskTypeSelect } from "components/task-type-select";

export const SearchPanel = () => {
  const searchParams = useTasksSearchParams();
  const setSearchParams = useSetUrlSearchParam();
  const reset = () => {
    setSearchParams({
      typeId: undefined,
      processorId: undefined,
      tagId: undefined,
      name: undefined,
    });
  };

  return (
    <Row marginBottom={4} gap={true} style={{ marginBottom: "1rem" }}>
      <Input
        style={{ width: "20rem" }}
        placeholder={"Task name"}
        value={searchParams.name}
        onChange={(evt) => setSearchParams({ name: evt.target.value })}
      />
      <UserSelect
        defaultOptionName={"Manager"}
        value={searchParams.processorId}
        onChange={(value) => setSearchParams({ processorId: value })}
      />
      <TaskTypeSelect
        defaultOptionName={"Type"}
        value={searchParams.typeId}
        onChange={(value) => setSearchParams({ typeId: value })}
      />
      <Button onClick={reset}>Reset</Button>
    </Row>
  );
};
