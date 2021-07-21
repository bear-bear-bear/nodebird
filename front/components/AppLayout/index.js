import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Row, Col } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

import UserProfile from '../UserProfile';
import LoginForm from '../LoginForm';

import * as S from './styles';

const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);

  return (
    <div>
      <S.Global />
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a href="home">노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <S.SearchInput
            enterButton
            value={S.SearchInput}
            onChange={onChangeSearchInput}
            onSearch={onSearch}
          />
        </Menu.Item>
        { me ? (
          <Menu.Item>
            <Link href="/profile">
              <a href="profile">프로필</a>
            </Link>
          </Menu.Item>
        ) : (
          <Menu.Item>
            <Link href="/signup">
              <a href="signup">회원가입</a>
            </Link>
          </Menu.Item>
        )}
        <Menu.Item>
          <S.SearchInput enterButton />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/bear-bear-bear"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made by
            <S.IconWrapper>
              <GithubOutlined />
            </S.IconWrapper>
            bear-bear-bear
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
