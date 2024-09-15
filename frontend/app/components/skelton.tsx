import { Skeleton, Table } from "@radix-ui/themes";

export const SkeletonTableCell = () => {
  return (
    <Table.Cell>
      <Skeleton> test test test </Skeleton>
    </Table.Cell>
  );
};
