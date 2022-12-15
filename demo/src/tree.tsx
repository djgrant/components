import { ReactNode, useState } from "react";
import { Tree } from "@djgrant/components";

interface TreeNode {
  path: string;
  parentPath: string | null;
  isDir: boolean;
}

const files = [
  { path: "lib", parentPath: null, isDir: true },
  { path: "lib/index.ts", parentPath: "lib", isDir: false },
  { path: "lib/tree.ts", parentPath: "lib", isDir: false },
  { path: "src", parentPath: null, isDir: true },
  { path: "src/index.ts", parentPath: "src", isDir: false },
  { path: "src/index.css", parentPath: "src", isDir: false },
  { path: "package.json", parentPath: null, isDir: false },
  { path: "tsconfig.json", parentPath: null, isDir: false },
];

export const FileTree = () => {
  return (
    <Tree
      nodes={files}
      nodeIdProp="path"
      nodeParentIdProp="parentPath"
      nodeSorter={sortLexicallyWithFoldersOnTop}
      List={List}
      ListItem={ListItem}
    />
  );
};

const sortLexicallyWithFoldersOnTop = (a: TreeNode, b: TreeNode) =>
  Number(b.isDir) - Number(a.isDir) ||
  (a.path ? a.path.localeCompare(b.path) : 0);

const List = ({ children }: { children: ReactNode }) => <ul>{children}</ul>;

const ListItem = ({
  item,
  children,
}: {
  item: TreeNode;
  children: ReactNode;
}) => {
  return item.isDir ? (
    <li>
      {item.path}
      {children}
    </li>
  ) : (
    <li>
      {item.path}
      {children}
    </li>
  );
};
