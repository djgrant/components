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
} from "./components";

export const Examples = () => (
  <>
    <header className="p-6 border-b border-gray-200">
      <Heading h1 className="text-green-500">
        @djgrant/components
      </Heading>
    </header>

    <div className="flex">
      <div className="w-48 p-6 space-y-4">
        <Heading h6>Components</Heading>
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

      <Prose className="p-6">
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
          <Heading h1>Heading 1</Heading>
          <Heading h2>Heading 2</Heading>
          <Heading h3>Heading 3</Heading>
          <Heading h4>Heading 4</Heading>
          <Heading h5>Heading 5</Heading>
          <Heading h6>Heading 6</Heading>
        </TabPage>
      </Prose>
    </div>
  </>
);
