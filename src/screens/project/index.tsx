import { Link } from "react-router-dom";
import { Route, Routes, Navigate, useLocation } from "react-router";
import { EpicScreen } from "screens/epic";
import { KanbanScreen } from "screens/dashboard";
import styled from "@emotion/styled";
import { Menu } from "antd";

const useRouteType = () => {
  const units = useLocation().pathname.split("/");
  return units[units.length - 1];
};

export const ProjectScreen = () => {
  const selected = useRouteType();
  return (
    <Container>
      <Aside>
        <Menu selectedKeys={[selected]}>
          <Menu.Item key={"kanban"}>
            <Link to={"kanban"}>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key={"epic"}>
            <Link to={"epic"}>Task Group</Link>
          </Menu.Item>
        </Menu>
      </Aside>
      <Main>
        <Routes>
          <Route path={"/kanban"} element={<KanbanScreen />}></Route>
          <Route path={"epic"} element={<EpicScreen />}></Route>
          <Navigate to={window.location.pathname + "/kanban"} replace={true} />
        </Routes>
      </Main>
    </Container>
  );
};

const Aside = styled.aside`
  background-color: rgb(244, 245, 247);
`;

const Main = styled.div`
  box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.1);
  display: flex;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
`;
