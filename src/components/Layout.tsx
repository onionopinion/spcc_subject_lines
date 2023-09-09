import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";
import Students from "./Students";
import Prompter from "./Prompter";

const Layout = () => (
  <div>
    <Menu fixed="top">
      <Container>
        <Menu.Item as="a" header>
          {/* <Image size="mini" src="/logo.png" style={{ marginRight: "1.5em" }} /> */}
          Subject line Generator 0.0 {"(pre-alpha)"}
        </Menu.Item>
        <Menu.Item as="a" header>
          <>
            <Prompter></Prompter>
          </>
        </Menu.Item>
      </Container>
    </Menu>

    <Container text style={{ marginTop: "7em" }}>
      <Students></Students>
    </Container>
  </div>
);

export default Layout;
