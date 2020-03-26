import React from 'react';
import PropTypes from 'prop-types';
import useCallbackRef from 'helper/useCallbackRef';

import LayoutProvider, { useLayoutContext } from './LayoutContext';
import {
  AsideSlot,
  ContentSlot,
  FlexColumn,
  FlexRow,
  FooterSlot,
  HeaderSlot,
  LayoutContainer,
} from './meta';

/*****************************************************************************
 * Default Exports
 *****************************************************************************/
export default function Layout(props) {
  const { children, ...others } = props;

  const [header, headerRef] = useCallbackRef();
  const [headerProps, setHeaderProps] = React.useState({});

  const [footer, footerRef] = useCallbackRef();
  const [footerProps, setFooterProps] = React.useState({});

  const [aside, asideRef] = useCallbackRef();
  const [asideProps, setAsideProps] = React.useState({});

  const [content, contentRef] = useCallbackRef();
  const [contentProps, setContentProps] = React.useState({});

  const contextValue = React.useMemo(
    () => ({
      header,
      setHeaderProps,
      footer,
      setFooterProps,
      aside,
      setAsideProps,
      content,
      setContentProps,
    }),
    [aside, content, footer, header]
  );
  const parentLayoutContext = useLayoutContext();
  const hasParent = !!parentLayoutContext;
  const mounted = header && footer && aside && content;

  return (
    <LayoutProvider value={contextValue}>
      <LayoutContainer root={!hasParent} {...others}>
        <FlexRow>
          <AsideSlot ref={asideRef} {...asideProps} />
          <FlexColumn>
            <HeaderSlot ref={headerRef} {...headerProps} />
            <ContentSlot ref={contentRef} {...contentProps}>
              {mounted && children}
            </ContentSlot>
            <FooterSlot ref={footerRef} {...footerProps} />
          </FlexColumn>
        </FlexRow>
      </LayoutContainer>
    </LayoutProvider>
  );
}
Layout.propTypes = { children: PropTypes.node };
