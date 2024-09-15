"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Button,
  Table,
  Heading,
  Skeleton,
} from "@radix-ui/themes";
import { bankAccountsApi } from "../../apis/bank_accounts/fetch";
import { BankAccount } from "../../types/bank_account";
import { SkeletonTableCell } from "../../components/skelton";

const Home = () => {
  const [data, setData] = useState<BankAccount[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await bankAccountsApi();
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <Container size="4">
      <div className="flex items-center">
        <Heading as="h1">口座一覧</Heading>

        <div className="ml-auto flex items-center gap-2">
          <Button color="indigo">口座の追加</Button>
        </div>
      </div>
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
            {!data ? (
              <Table.Row>
                <SkeletonTableCell />
                <SkeletonTableCell />
                <SkeletonTableCell />
                <SkeletonTableCell />
                <SkeletonTableCell />
                <SkeletonTableCell />
              </Table.Row>
            ) : (
              data.map((ba: BankAccount) => (
                <Table.Row>
                  <Table.Cell>{ba.bank_name}</Table.Cell>
                  <Table.Cell>{ba.branch}</Table.Cell>
                  <Table.Cell>{ba.type}</Table.Cell>
                  <Table.Cell>{ba.number}</Table.Cell>
                  <Table.Cell>{ba.holder}</Table.Cell>
                  <Table.Cell> -- </Table.Cell>
                </Table.Row>
              ))
            )}
          </Table.Body>
        </Table.Root>
      </Box>
    </Container>
  );
};

export default Home;
