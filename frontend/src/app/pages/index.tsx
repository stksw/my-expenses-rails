import React, { FC } from "react";
import { GetStaticProps } from "next";

type BankAccount = {
  id: number;
  bank_name: string;
};

type Props = {
  bankAccounts: BankAccount[];
};

const Home: FC<Props> = (props) => {
  return (
    <div>
      <h2>POSTの一覧</h2>
      <table>
        {props.bankAccounts.map((account) => (
          <tr>
            <td>{account.id}.</td>
            <td>{account.bank_name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export const getStaticProps = async () => {
  // URLはlocalhostではなくapiとなる
  const response = await fetch("http://api:3000/bank_accounts", {
    method: "GET",
  });
  const json = await response.json();

  return {
    props: {
      posts: json,
    },
  };
};

export default Home;
