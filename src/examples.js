import React from "react";

import {
  Button,
  Card,
  Heading,
  Prose,
  Link,
  Select,
  Tabs,
  Tab,
  TabPage,
  TabPanel,
} from "./elements";

export const Examples = () => (
  <div className="flex p-4 bg-gray-200">
    <div className="w-48 space-y-4">
      <div className="text-xs font-bold text-gray-600 uppercase">
        Components
      </div>

      <Tabs direction="vertical">
        <Tab to="buttons" default>
          Buttons
        </Tab>
        <Tab to="cards">Cards</Tab>
        <Tab to="forms">Forms</Tab>
        <Tab to="tabs">Tabs</Tab>
        <Tab to="headings">Headings</Tab>
      </Tabs>
    </div>

    <Prose>
      <TabPage match="/buttons" default>
        <h2>Buttons</h2>
        <div className="flex space-x-2">
          <Button>Click me</Button>
          <Button type="primary">Click me</Button>
          <Button type="blank">Click me</Button>
        </div>
      </TabPage>

      <TabPage match="cards">
        <h2>Cards</h2>
        <Card>Hello card</Card>
      </TabPage>

      <TabPage match="forms">
        <h2>Forms</h2>
        <h3>Select</h3>
        <Select>
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
      </TabPage>

      <TabPage match="./tabs/*">
        <h2>Tabs</h2>
        <Tabs>
          <Tab to="tabs/first" defaultOf="./tabs">
            Hello
          </Tab>
          <Tab to="tabs/second">Hello</Tab>
          <Tab to="tabs/third">Hello</Tab>
        </Tabs>

        <TabPanel match="tabs/first" defaultOf="./tabs">
          First
        </TabPanel>
        <TabPanel match="tabs/second">
          Second <Link to="/examples">Back to examples</Link>
        </TabPanel>
        <TabPanel match="tabs/third">Third</TabPanel>
      </TabPage>

      <TabPage match="headings">
        <h2>Text</h2>
        <Heading h1>Heading 1</Heading>
        <Heading h2>Heading 2</Heading>
        <Heading h3>Heading 3</Heading>
      </TabPage>
    </Prose>
  </div>
);
