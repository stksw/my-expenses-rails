"use client";

import React, { useEffect, useState } from "react";
import { Box, Container, Button, Table, Heading } from "@radix-ui/themes";
import { bankAccountsApi } from "../../apis/bank_accounts/fetch";
import { BankAccount } from "../../types/bank_account";
import { SkeletonTableCell } from "../../components/skelton";
import { BankAccountForm } from "./form";

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
          <BankAccountForm />
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
                <Table.Row key={ba.id}>
                  <Table.Cell>{ba.bank_name}</Table.Cell>
                  <Table.Cell>{ba.branch}</Table.Cell>
                  <Table.Cell>{ba.account_type}</Table.Cell>
                  <Table.Cell>{ba.account_number}</Table.Cell>
                  <Table.Cell>{ba.account_holder}</Table.Cell>
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
