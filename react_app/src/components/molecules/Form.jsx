import React from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

export const Form = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div>
      <Input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />

      <Button onClick={onClick} text={"追加"} />
    </div>
  );
};
