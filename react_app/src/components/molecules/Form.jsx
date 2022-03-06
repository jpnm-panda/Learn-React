import React from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { useButtonContext } from "../../context/ButtonContext";

export const Form = (props) => {
  const { todoText, onClick, onChange } = props;
  const { addButtonText } = useButtonContext();

  return (
    <div>
      <Input
        value={todoText}
        onChange={onChange}
      />

      <Button
        onClick={onClick}
        buttonText={addButtonText}
      />
    </div>
  );
};
