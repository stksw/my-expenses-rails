"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Table,
  Heading,
  Dialog,
  Button,
} from "@radix-ui/themes";
import { Settings } from "lucide-react";
import { BankAccountApi } from "../../apis/bank_accounts/fetch";
import { BankAccount, BankAccountFormData } from "../../types/bank_account";
import { SkeletonTableCell } from "../../components/skelton";
import { BankAccountForm } from "./form";

const Home = () => {
  const [list, setList] = useState<BankAccount[] | null>(null);
  const [formData, setFormData] = useState<BankAccountFormData | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchList = async () => {
      const res = await BankAccountApi.list();
      setList(res.data);
    };
    fetchList();
  }, []);

  useEffect(() => {}, [formData]);

  return (
    <Dialog.Root>
      <Container size="4">
        <div className="flex items-center">
          <Heading as="h1">口座一覧</Heading>

          <div className="ml-auto flex items-center gap-2">
            <BankAccountForm data={formData} />
            <Dialog.Trigger>
              <Button color="indigo">口座の追加</Button>
            </Dialog.Trigger>
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
                <Table.ColumnHeaderCell> </Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {!list ? (
                <Table.Row>
                  <SkeletonTableCell />
                  <SkeletonTableCell />
                  <SkeletonTableCell />
                  <SkeletonTableCell />
                  <SkeletonTableCell />
                  <SkeletonTableCell />
                  <SkeletonTableCell />
                </Table.Row>
              ) : (
                list.map((ba: BankAccount) => (
                  <Table.Row key={ba.id}>
                    <Table.Cell>{ba.bank_name}</Table.Cell>
                    <Table.Cell>{ba.branch}</Table.Cell>
                    <Table.Cell>{ba.account_type}</Table.Cell>
                    <Table.Cell>{ba.account_number}</Table.Cell>
                    <Table.Cell>{ba.account_holder}</Table.Cell>
                    <Table.Cell> -- </Table.Cell>
                    <Table.Cell>
                      <Dialog.Trigger>
                        <Settings
                          size={24}
                          color="gray"
                          onClick={() => setFormData(ba)}
                        />
                      </Dialog.Trigger>
                    </Table.Cell>
                  </Table.Row>
                ))
              )}
            </Table.Body>
          </Table.Root>
        </Box>
      </Container>
    </Dialog.Root>
  );
};

export default Home;
