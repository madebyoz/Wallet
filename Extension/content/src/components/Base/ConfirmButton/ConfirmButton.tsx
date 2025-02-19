import type { FC } from "react";

import { useShowDrawer } from "../../../hooks/useShowDrawer";
import { sendToEthereum } from "../../../services/sendToEthereum";

import { ConfirmButtonContainer, Button } from "./ConfirmButton.styles";

type ConfirmButtonParams = {
  id: number;
  onCancelText?: string;
  onCancelClick?: () => void;
  onConfirmText: string;
  onConfirmClick: () => void;
};

export const ConfirmButton: FC<ConfirmButtonParams> = ({
  id,
  onCancelText = "Cancel",
  onCancelClick,
  onConfirmText,
  onConfirmClick,
}) => {
  const [closeDrawer] = useShowDrawer(state => {
    return [state.closeDrawer];
  });

  return (
    <ConfirmButtonContainer>
      <Button
        option="cancel"
        onClick={() => {
          sendToEthereum(null, id, "cancel");
          closeDrawer();
          onCancelClick();
        }}
      >
        {onCancelText}
      </Button>
      <div style={{ width: "24px" }} />
      <Button
        option="approve"
        onClick={() => {
          closeDrawer();
          onConfirmClick();
        }}
      >
        {onConfirmText}
      </Button>
    </ConfirmButtonContainer>
  );
};
