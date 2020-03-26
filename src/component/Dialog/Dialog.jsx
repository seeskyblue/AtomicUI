import React from 'react';
import PropTypes from 'prop-types';

import {
  ActionBox,
  ActionButton,
  ChildrenBox,
  DialogBox,
  DialogOverlay,
  MessageBox,
  TitleBox,
  TitleContent,
} from './meta';

export default function Dialog(props) {
  const { children, title, message, actions, ...others } = props;

  return (
    <DialogOverlay>
      <DialogBox {...others}>
        {title && (
          <TitleBox>
            <TitleContent>{title}</TitleContent>
          </TitleBox>
        )}
        {message && <MessageBox>{message}</MessageBox>}
        {children && <ChildrenBox>{children}</ChildrenBox>}
        <ActionBox>
          {actions.map(({ label, onClick }) => (
            <ActionButton key={label} onClick={onClick} variant="text">
              {label}
            </ActionButton>
          ))}
        </ActionBox>
      </DialogBox>
    </DialogOverlay>
  );
}
Dialog.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ),
  children: PropTypes.node,
  message: PropTypes.string,
  title: PropTypes.string,
};
