"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Table,
  Heading,
  Dialog,
  Button,
} from "@radix-ui/themes";
import { Settings } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { AccountTransactionApi } from "@/apis/account_transactions/function";
import {
  AccountTransaction,
  AccountTransactionFormData,
  emptyAccountTransaction,
} from "@/types/account_transaction";
import { SkeletonTableCell } from "@/components/skelton";
import { AccountTransactionForm } from "@/(pages)/account_transactions/form";
import { TransactionAmount } from "@/components/transaction_amount";

const AccountTransactionsPage = () => {
  const [formData, setFormData] = useState<AccountTransactionFormData>(
    emptyAccountTransaction
  );

  const { data: res } = useQuery({
    queryKey: ["account_transactions", "list"],
    queryFn: () => AccountTransactionApi.list(),
  });

  return (
    <Dialog.Root>
      <Container size="4">
        <div className="flex items-center">
          <Heading as="h1">口座取引一覧</Heading>

          <div className="ml-auto flex items-center gap-2">
            <AccountTransactionForm data={formData} />
            <Dialog.Trigger>
              <Button color="indigo" onClick={() => setFormData({ id: "" })}>
                口座取引の追加
              </Button>
            </Dialog.Trigger>
          </div>
        </div>
        <Box pt="8">
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>取引日</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>内容</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>金額</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>金融機関</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell> </Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {!res ? (
                <Table.Row>
                  <SkeletonTableCell />
                  <SkeletonTableCell />
                  <SkeletonTableCell />
                  <SkeletonTableCell />
                  <SkeletonTableCell />
                </Table.Row>
              ) : (
                res.data.map((at: AccountTransaction) => (
                  <Table.Row key={at.id}>
                    <Table.Cell>
                      {format(at.recorded_at, "yyyy-MM-dd")}
                    </Table.Cell>
                    <Table.Cell>{at.description}</Table.Cell>
                    <Table.Cell>
                      <TransactionAmount transaction={at} />
                    </Table.Cell>
                    <Table.Cell> -- </Table.Cell>
                    <Table.Cell>
                      <Dialog.Trigger>
                        <Settings
                          size={24}
                          color="gray"
                          onClick={() => setFormData(at)}
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

export default AccountTransactionsPage;
