import React, { FC } from "react";
import {
  Box,
  Container,
  Card,
  Table,
  Section,
  Heading,
} from "@radix-ui/themes";

type BankAccount = {
  id: number;
  bank_name: string;
};

type Props = {
  bankAccounts: BankAccount[];
};

const Home: FC<Props> = (props) => {
  return (
    <Container size="4">
      <Heading as="h1">口座一覧</Heading>
      <Box pt="8">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>金融機関名</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>支店</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>種別</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>口座番号</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>名義</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>残高</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
              <Table.Cell>danilo@example.com</Table.Cell>
              <Table.Cell>Developer</Table.Cell>
              <Table.Cell>Developer</Table.Cell>
              <Table.Cell>Developer</Table.Cell>
              <Table.Cell>Developer</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Box>
    </Container>
  );
};

// export const getStaticProps = async () => {
//   // URLはlocalhostではなくapiとなる
//   const response = await fetch("http://localhost:3000/bank_accounts", {
//     method: "GET",
//   });
//   const json = await response.json();

//   return {
//     props: {
//       bankAccounts: json,
//     },
//   };
// };

export default Home;
