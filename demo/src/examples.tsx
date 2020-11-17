import React from "react";
import { RouteComponentProps } from "@reach/router";
import { importMDX } from "mdx.macro";
import { tw, ifElse } from "@djgrant/react-tailwind";
import {
  Badge,
  Button,
  Card,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Input,
  Label,
  Link,
  Progress,
  Prose,
  Select,
  Tabs,
  Tab,
  TabProps,
  TabPage,
  TabPanel,
  Textarea,
} from "@djgrant/components";

const Readme = importMDX.sync("../../packages/components/README.md");

export const Examples: React.FC<RouteComponentProps> = () => (
  <>
    <header className="p-6 border-b border-gray-200">
      <H1 className="text-green-500">@djgrant/components</H1>
    </header>

    <div className="flex">
      <div className="w-48 py-6 ">
        <Tabs direction="vertical">
          <Tab to="readme" default>
            Readme
          </Tab>
          <H6 className="px-6 my-4">Navigation</H6>
          <Tab to="tabs">Tabs</Tab>
          <H6 className="px-6 my-4">Data Entry</H6>
          <Tab to="forms">Forms</Tab>
          <Tab to="buttons">Buttons</Tab>
          <H6 className="px-6 my-4">Data Viz</H6>
          <Tab to="badges">Badges</Tab>
          <Tab to="cards">Cards</Tab>
          <Tab to="progress">Progress</Tab>
          <H6 className="px-6 my-4">Text</H6>
          <Tab to="headings">Headings</Tab>
          <Tab to="links">Links</Tab>
        </Tabs>
      </div>

      <main className="flex-grow">
        <Prose className="p-6 pt-8">
          <TabPage match="readme" default>
            <Readme />
          </TabPage>

          <TabPage match="badges">
            <h1>Badges</h1>
            {[
              { label: "Inbox", color: "blue", content: 23 },
              { label: "Read", color: "green", content: 130 },
              { label: "Unread", color: "red", content: 11230 },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex justify-between w-48 py-2 border-b"
              >
                <div className="font-medium">{badge.label}</div>
                <Badge color={badge.color}>{badge.content}</Badge>
              </div>
            ))}
          </TabPage>

          <TabPage match="buttons">
            <h1>Buttons</h1>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Button size="sm">Click me</Button>
                <Button variant="outline">Click me</Button>
                <Button variant="outline">Click me</Button>
              </div>
            </div>
          </TabPage>

          <TabPage match="cards">
            <h1>Cards</h1>
            <Card className="h-24 p-4">Hello</Card>
            <br />
            <Card>
              <div className="h-16 bg-teal-400"></div>
              <div className="h-16 p-4">Hello</div>
            </Card>
          </TabPage>

          <TabPage match="forms">
            <h1>Forms</h1>
            <p>
              A React wrapper for{" "}
              <Link to="https://tailwindcss-custom-forms.netlify.app/">
                Tailwind CSS Custom Forms
              </Link>
            </p>

            <hr className="my-8" />

            <h3>Inputs</h3>
            <div className="space-y-4">
              <Input type="search" placeholder="Search issues..." />

              <Label>
                <div>Your name</div>
                <Input placeholder="Daniel Spaniel" />
              </Label>

              <Label>
                <div>Prefered tools</div>
                <Select multiple className="w-full">
                  <option>Tailwind</option>
                  <option>Styled System</option>
                  <option>Styled Components</option>
                  <option>Styled JSX</option>
                  <option>CSS Modules</option>
                </Select>
              </Label>
            </div>

            <h3>Inline Forms</h3>
            <Card className="p-8 space-y-4 bg-gray-200">
              <Label layout="col">
                <div className="md:w-1/3">Requested Limit</div>
                <Select>
                  <option>$1,000</option>
                  <option>$5,000</option>
                  <option>$10,000</option>
                  <option>$25,000</option>
                </Select>
              </Label>
              <Label layout="col">
                <div className="md:w-1/3">Password</div>
                <Input type="password" />
              </Label>
            </Card>

            <h3>Textarea</h3>
            <Label>
              <div>Notes</div>
              <Textarea rows={3} className="w-full" />
            </Label>

            <h3>Radios</h3>
            <div className="space-y-2">
              <Label layout="inline">
                <Input
                  type="radio"
                  name="accountType"
                  value="personal"
                  color="pink"
                />
                <span>Personal</span>
              </Label>
              <Label layout="inline">
                <Input
                  type="radio"
                  name="accountType"
                  value="busines"
                  color="teal"
                />
                <span>Business</span>
              </Label>
            </div>

            <h3>Checkboxes</h3>
            <Label layout="inline">
              <Input type="checkbox" />
              <span>
                I agree to the <span className="underline">privacy policy</span>
              </span>
            </Label>
          </TabPage>

          <TabPage match="headings">
            <h1>Headings</h1>
            <H1>Heading 1</H1>
            <H2>Heading 2</H2>
            <H3>Heading 3</H3>
            <H4>Heading 4</H4>
            <H5>Heading 5</H5>
            <H6>Heading 6</H6>
          </TabPage>

          <TabPage match="links">
            <h1>Links</h1>
            <p>
              <Link to="/badges">Go to badges</Link>
            </p>
            <p>
              <Link to="https://github.com/djgrant/components/">
                Github Repository
              </Link>
            </p>
          </TabPage>

          <TabPage match="progress">
            <h1>Progress</h1>
            <Progress
              size="sm"
              bars={[
                { pc: 20, label: "Failed", color: "red" },
                { pc: 30, label: "Succeeded", color: "green" },
                { pc: 12, label: "Pending", color: "blue" },
              ]}
            >
              Processing tasks.... (62%)
            </Progress>
          </TabPage>

          <TabPage match="./tabs/*">
            <h1>Tabs</h1>
            <Tabs>
              <Tab to="tabs/first" defaultOf="./tabs">
                Basic
              </Tab>
              <Tab to="tabs/second">Nested</Tab>
              <Tab to="tabs/third">Custom</Tab>
            </Tabs>

            <div className="py-4">
              <TabPanel match="tabs/first" defaultOf="./tabs">
                <Link to="/">Back home</Link>
              </TabPanel>
              <TabPanel match="tabs/second/*">
                <Tabs direction="vertical">
                  <Tab to="tabs/second/first" defaultOf="./tabs/second">
                    One
                  </Tab>
                  <Tab to="tabs/second/second">Two</Tab>
                </Tabs>
              </TabPanel>
              <TabPanel match="tabs/third/*">
                <Tabs>
                  <CustomTab to="tabs/third/first" defaultOf="./tabs/third">
                    First custom tab
                  </CustomTab>
                  <CustomTab to="tabs/third/second">
                    Second custom tab
                  </CustomTab>
                </Tabs>
              </TabPanel>
            </div>
          </TabPage>
        </Prose>
      </main>
    </div>
  </>
);

const CustomTab: React.FC<TabProps> = ({ ...props }) => (
  <Tab
    getClassName={({ active, className }) =>
      tw.classnames(
        "inline-block",
        "rounded-full",
        "font-medium",
        "no-underline",
        "text-base",
        "py-1",
        "px-3",
        ifElse(
          active,
          ["bg-blue-500", "text-white"],
          ["text-gray-600", "hover:text-blue-500"]
        ),
        className
      )
    }
    {...props}
  />
);
