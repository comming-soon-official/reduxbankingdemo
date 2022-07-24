import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deposit, withdraw, collectIntrest, deleteAcc} from "../actions/BankingAction"
import { toggleacc } from "../actions/LoginActions"
const Banking = () => {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch(deposit(amount));
  };
  const handleWithdraw = () => {
    dispatch(withdraw(amount));
  };
  const handleCollectIntrest = () => {
    dispatch(collectIntrest());
  };
  const handleDelete = () => {
    dispatch(deleteAcc());
  };
  const handleChangeAcc = () => {
    dispatch(toggleacc())
  };
  return (
    <div>
      <Form>
        <Form.Control
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="text"
          placeholder="Normal text"
        />
        <Button onClick={handleDeposit} variant="success">
          Deposit{" "}
        </Button>
        <Button onClick={handleWithdraw} variant="primary">
          Withdraw{" "}
        </Button>
        <Button onClick={handleCollectIntrest} variant="warning">
          Collect Intrest{" "}
        </Button>
        <Button onClick={handleDelete} variant="danger">
          Delete{" "}
        </Button>
        <Button onClick={handleChangeAcc} variant="secondary">
          Change Account{" "}
        </Button>
      </Form>
    </div>
  );
};

export default Banking;
