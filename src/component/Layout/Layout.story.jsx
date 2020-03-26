import React from 'react';

import Layout, { Aside, Content, Footer, Header } from '../Layout';

export default {
  title: 'Layout',
  component: Layout,
};

export const Default_Layout = () => (
  <div css="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: white;">
    <Layout>
      <Header>
        <div css="background: blue; height: 100%;">Header</div>
      </Header>
      <Content>
        <div css="background: lightYellow; height: 100%;">Content</div>
      </Content>
      <Footer>
        <div css="background: grey; height: 100%;">Footer</div>
      </Footer>
      <Aside>
        <div css="background: green; height: 100%;">Aside</div>
      </Aside>
    </Layout>
  </div>
);
