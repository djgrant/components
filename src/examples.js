import React from "react";
import { importMDX } from "mdx.macro";
import {
  Button,
  Card,
  Heading,
  Input,
  Link,
  Prose,
  Search,
  Select,
  Tabs,
  Tab,
  TabPage,
  TabPanel,
} from "./components";

const Readme = importMDX.sync("../README.md");

export const Examples = () => (
  <>
    <header className="p-6 border-b border-gray-200">
      <Heading h1 className="text-green-500">
        @djgrant/components
      </Heading>
    </header>

    <div className="flex">
      <div className="w-48 py-6 space-y-4">
        <Tabs direction="vertical">
          <Tab to="readme" default>
            Readme
          </Tab>
        </Tabs>
        <Heading h6 className="px-6">
          Components
        </Heading>
        <Tabs direction="vertical">
          <Tab to="buttons">Buttons</Tab>
          <Tab to="cards">Cards</Tab>
          <Tab to="forms">Forms</Tab>
          <Tab to="tabs">Tabs</Tab>
          <Tab to="headings">Headings</Tab>
        </Tabs>
      </div>

      <Prose className="p-6">
        <TabPage match="readme" default>
          <Readme />
        </TabPage>
        <TabPage match="buttons">
          <h1>Buttons</h1>
          <div className="flex space-x-2">
            <Button>Click me</Button>
            <Button type="primary">Click me</Button>
            <Button type="blank">Click me</Button>
          </div>
        </TabPage>

        <TabPage match="cards">
          <h1>Cards</h1>
          <Card>Hello card</Card>
        </TabPage>

        <TabPage match="forms">
          <h1>Forms</h1>
          <h4>Input</h4>
          <Input type="password" />

          <h4>Select</h4>
          <Select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </Select>

          <h4>Search input</h4>
          <Search placeholder="Search..." />
        </TabPage>

        <TabPage match="./tabs/*">
          <h1>Tabs</h1>
          <Tabs>
            <Tab to="tabs/first" defaultOf="./tabs">
              Hello
            </Tab>
            <Tab to="tabs/second">Hello</Tab>
            <Tab to="tabs/third">Hello</Tab>
          </Tabs>

          <div className="py-4">
            <TabPanel match="tabs/first" defaultOf="./tabs">
              First
            </TabPanel>
            <TabPanel match="tabs/second">
              <div>Second</div>
              <Link to="/examples">Back to examples</Link>
            </TabPanel>
            <TabPanel match="tabs/third">Third</TabPanel>
          </div>
        </TabPage>

        <TabPage match="headings">
          <h1>Headings</h1>
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
