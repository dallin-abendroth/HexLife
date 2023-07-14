// src/SavedStateButton.tsx

import React from 'react';
import { SaveStateButton, ForgetStateButton } from './StateButtons.styled';

type SavedStateButtonProps = {
  savedState: Array<Array<boolean>> | null,
  onUse: () => void,
  onSave: () => void,
  onForget: () => void,
  disabled: boolean,
};

const SavedStateButton: React.FC<SavedStateButtonProps> = ({ savedState, onUse, onSave, onForget, disabled }) => {
  return (
    <div style={{position: 'relative'}}>
      <SaveStateButton disabled={!savedState && disabled} onClick={savedState ? onUse : onSave}>
        {savedState ? '★' : '☆'}
      </SaveStateButton>
      {savedState && (
        <ForgetStateButton onClick={onForget}>x</ForgetStateButton>
      )}
    </div>
  );
};

export default SavedStateButton;