import React from "react";
import { importMDX } from "mdx.macro";
import {
  Badge,
  Button,
  Card,
  Heading,
  Input,
  Label,
  Link,
  Progress,
  Prose,
  Select,
  Tabs,
  Tab,
  TabPage,
  TabPanel,
  Textarea,
} from "@djgrant/components";

const Readme = importMDX.sync("../../README.md");

export const Examples = () => (
  <>
    <header className="p-6 border-b border-gray-200">
      <Heading h1 className="text-green-500">
        @djgrant/components
      </Heading>
    </header>

    <div className="flex">
      <div className="w-48 py-6 ">
        <Tabs direction="vertical">
          <Tab to="readme" default>
            Readme
          </Tab>
          <Heading h6 className="px-6 my-4">
            Navigation
          </Heading>
          <Tab to="tabs">Tabs</Tab>
          <Heading h6 className="px-6 my-4">
            Data Entry
          </Heading>
          <Tab to="forms">Forms</Tab>
          <Tab to="buttons">Buttons</Tab>
          <Heading h6 className="px-6 my-4">
            Data Viz
          </Heading>
          <Tab to="badges">Badges</Tab>
          <Tab to="cards">Cards</Tab>
          <Tab to="progress">Progress</Tab>
          <Heading h6 className="px-6 my-4">
            Text
          </Heading>
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
              { label: "Read", color: "green", content: 13 },
              { label: "Unread", color: "red", content: 10 },
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
              {["sm", "md", "lg"].map((size) => (
                <div key={size}>
                  <h4>Size {size}</h4>
                  <div className="flex space-x-2">
                    <Button size={size}>Click me</Button>
                    <Button size={size} type="outline">
                      Click me
                    </Button>
                  </div>
                </div>
              ))}
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
              <Textarea rows="3" className="w-full" />
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
            <Heading h1>Heading 1</Heading>
            <Heading h2>Heading 2</Heading>
            <Heading h3>Heading 3</Heading>
            <Heading h4>Heading 4</Heading>
            <Heading h5>Heading 5</Heading>
            <Heading h6>Heading 6</Heading>
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
                <Link to="/">Back home</Link>
              </TabPanel>
              <TabPanel match="tabs/third">Third</TabPanel>
            </div>
          </TabPage>
        </Prose>
      </main>
    </div>
  </>
);
