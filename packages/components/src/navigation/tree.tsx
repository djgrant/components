import React, { FC, ReactNode } from "react";

export type AdjListItem<
  Item,
  IdKey extends string,
  ParentIdKey extends string
> = Item & Record<IdKey, string> & Record<ParentIdKey, string | null | void>;

type AdjListItemPair<T> = [T, ReactNode];

type Props<Item, IdKey extends string, ParentIdKey extends string> = {
  nodes: AdjListItem<Item, IdKey, ParentIdKey>[];
  nodeIdProp?: IdKey;
  nodeParentIdProp?: ParentIdKey;
  nodeSorter?: (a: Item, b: Item) => number;
  List: FC<{ children: ReactNode }>;
  ListItem: FC<{ item: Item; children: ReactNode }>;
};

/**
 * Constructs a react tree from a sorted adjacency list in O(n)
 * @param nodes - An adjacency list of nodes referencing their parent by `nodeParentIdProp`
 * @param nodeIdProp - The property name to get the node's ID (default: `id`)
 * @param nodeParentIdProp - The property name to get the node's parent's ID (default: `parentId`)
 * @param nodeSorter - An optional sorting function, called at each hierarchy level
 * @param List - A component to wrap list items at each hierarchy level
 * @param ListItem - A component to render a list item
 * @param ListItem - A component to render a list item
 * @returns - The adjacency list rendered as a React tree
 */
export const Tree = <
  Item,
  IdKey extends string,
  ParentIdKey extends string
>({
  nodes,
  nodeIdProp,
  nodeParentIdProp,
  nodeSorter = () => -1,
  List,
  ListItem,
}: Props<Item, IdKey, ParentIdKey>) => {
  const getOrderedElements = (arr: AdjListItemPair<Item>[]) =>
    arr.sort((a, b) => nodeSorter(a[0], b[0])).map((pair) => pair[1]);
  const itemTree: AdjListItemPair<Item>[] = [];
  const itemPairsByParentPath = new Map<string, AdjListItemPair<Item>[]>();
  for (let i = nodes.length - 1; i >= 0; --i) {
    const item = nodes[i]!;
    const itemId = nodeIdProp ? item[nodeIdProp] : "id";
    const parentId = nodeParentIdProp ? item[nodeParentIdProp] : "parentId";
    const itemElement = (
      <ListItem key={itemId} item={item}>
        {itemPairsByParentPath.has(itemId) && (
          <List>{getOrderedElements(itemPairsByParentPath.get(itemId)!)}</List>
        )}
      </ListItem>
    );

    if (parentId) {
      if (!itemPairsByParentPath.has(parentId)) {
        itemPairsByParentPath.set(parentId, []);
      }
      itemPairsByParentPath.get(parentId)!.push([item, itemElement]);
    } else {
      itemTree.push([item, itemElement]);
    }
  }
  return <List>{getOrderedElements(itemTree)}</List>;
};
