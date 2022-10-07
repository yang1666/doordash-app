import React from 'react';
import { Layout } from 'antd';
import LoginForm from './components/LoginForm';

import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header></Header>
      <Content
        style={{
          padding: '50px',
          maxHeight: 'calc(100% - 64px)',
          overflowY: 'auto',
        }}
      >
        <LoginForm />
      </Content>
    </Layout>
  );
}

export default App;
