// src/SavedStateButton.tsx

import React from 'react';
import { SaveStateButton, ForgetStateButton } from './StateButtons.styled';

type SavedStateButtonProps = {
  savedState: Array<Array<boolean>> | null,
  onUse: () => void,
  onSave: () => void,
  onForget: () => void,
};

const SavedStateButton: React.FC<SavedStateButtonProps> = ({ savedState, onUse, onSave, onForget }) => {
  return (
    <div style={{position: 'relative'}}>
      <SaveStateButton onClick={savedState ? onUse : onSave}>
        {savedState ? '★' : '☆'}
      </SaveStateButton>
      {savedState && (
        <ForgetStateButton onClick={onForget}>x</ForgetStateButton>
      )}
    </div>
  );
};

export default SavedStateButton;