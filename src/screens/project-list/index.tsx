import { List } from "./list";
import { SearchPannel } from "./search-pannel";
import { useDebounce, useDocumentTitle } from "hooks";
import styled from "@emotion/styled";
import { Row } from "antd";
import { useProjects } from "hooks/project";
import { useUser } from "hooks/user";
import { useProjectModal, useProjectSearchParam } from "./utils";
import { ButtonNoPadding, ErrorBox } from "components/lib";

export const ProjectListScreen = () => {
  useDocumentTitle("Project list", false);
  const [param, setParam] = useProjectSearchParam();
  const { isLoading, data: list, error } = useProjects(useDebounce(param, 200));
  const { data: users } = useUser();
  const { open } = useProjectModal();
  return (
    <Container>
      <Row justify={"space-between"}>
        <h1>Project list</h1>
        <ButtonNoPadding type={"link"} onClick={open}>
          Create project
        </ButtonNoPadding>
      </Row>
      <SearchPannel
        users={users || []}
        param={param}
        setParam={setParam}
      ></SearchPannel>
      <ErrorBox error={error} />
      <List
        loading={isLoading}
        users={users || []}
        dataSource={list || []}
      ></List>
    </Container>
  );
};

ProjectListScreen.whyDidYouRender = false;

const Container = styled.div`
  padding: 3.2rem;
`;
